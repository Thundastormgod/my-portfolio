
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

type ModelOption = {
  id: string;
  name: string;
  description: string;
  task: "sentiment" | "summarize" | "generate";
};

const models: ModelOption[] = [
  {
    id: "distilbert-base-uncased-finetuned-sst-2-english",
    name: "Sentiment Analysis",
    description: "Analyzes the sentiment of text as positive or negative",
    task: "sentiment",
  },
  {
    id: "sshleifer/distilbart-cnn-12-6",
    name: "Text Summarization",
    description: "Creates concise summaries of longer text",
    task: "summarize",
  },
  {
    id: "gpt2",
    name: "Text Generation",
    description: "Generates text based on a prompt",
    task: "generate",
  },
];

interface SentimentResult {
  label: string;
  score: number;
}

const AIPlayground = () => {
  const [selectedModel, setSelectedModel] = useState<string>(models[0].id);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [maxLength, setMaxLength] = useState("100");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(true);
  const { toast } = useToast();

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
    setOutputText("");
  };

  const getModelTask = (): "sentiment" | "summarize" | "generate" => {
    return models.find((m) => m.id === selectedModel)?.task || "sentiment";
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    if (!apiKey.trim() && showApiInput) {
      toast({
        title: "API Key required",
        description: "Please enter your Hugging Face API key",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setOutputText("");

    try {
      const task = getModelTask();
      const url = `https://api-inference.huggingface.co/models/${selectedModel}`;
      
      let payload: any = {};
      
      if (task === "generate") {
        payload = {
          inputs: inputText,
          parameters: {
            max_length: parseInt(maxLength),
            return_full_text: false,
          },
        };
      } else if (task === "summarize") {
        payload = {
          inputs: inputText,
          parameters: {
            max_length: parseInt(maxLength),
            min_length: 30,
          },
        };
      } else {
        payload = {
          inputs: inputText,
        };
      }
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (task === "sentiment") {
        // Handle sentiment analysis result
        const result = data[0] as SentimentResult[];
        if (Array.isArray(result)) {
          // If result is an array of objects with label and score
          const sentimentOutput = result.map(
            (item) => `${item.label}: ${Math.round(item.score * 100)}%`
          ).join("\n");
          setOutputText(sentimentOutput);
        } else {
          setOutputText(JSON.stringify(result, null, 2));
        }
      } else if (task === "summarize") {
        // Handle summarization result
        setOutputText(data[0]?.summary_text || JSON.stringify(data, null, 2));
      } else if (task === "generate") {
        // Handle text generation result
        if (Array.isArray(data) && data[0]?.generated_text) {
          setOutputText(data[0].generated_text);
        } else {
          setOutputText(JSON.stringify(data, null, 2));
        }
      } else {
        // Fallback for unexpected response format
        setOutputText(JSON.stringify(data, null, 2));
      }
      
      // Hide API key input after successful request
      if (showApiInput) {
        setShowApiInput(false);
      }
      
    } catch (error) {
      console.error("Error calling Hugging Face API:", error);
      toast({
        title: "Error",
        description: "Failed to process your request. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4">AI Playground 🧠</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test various AI models with your own inputs. This interactive
            playground demonstrates integration with the Hugging Face API
            and showcases different AI capabilities.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select a Model</CardTitle>
            <CardDescription>
              Choose from different pre-trained models to analyze your text
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {showApiInput && (
                <div className="space-y-2">
                  <Label htmlFor="api-key">Hugging Face API Key</Label>
                  <Input
                    id="api-key"
                    type="password"
                    placeholder="Enter your Hugging Face API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    You'll need a valid Hugging Face API key to use this playground.
                    Get one at <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">huggingface.co/settings/tokens</a>
                  </p>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Select 
                  value={selectedModel} 
                  onValueChange={handleModelChange}
                >
                  <SelectTrigger id="model">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((model) => (
                      <SelectItem key={model.id} value={model.id}>
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {models.find((m) => m.id === selectedModel)?.description}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="input-text">Input Text</Label>
                <Textarea
                  id="input-text"
                  placeholder={
                    getModelTask() === "sentiment"
                      ? "Enter text to analyze sentiment (e.g., 'I love this product, it's amazing!')"
                      : getModelTask() === "summarize"
                      ? "Enter a longer text to summarize (at least a few paragraphs)"
                      : "Enter a prompt to generate text from"
                  }
                  className="min-h-32"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              {(getModelTask() === "summarize" || getModelTask() === "generate") && (
                <div className="space-y-2">
                  <Label htmlFor="max-length">Maximum Output Length</Label>
                  <Input
                    id="max-length"
                    type="number"
                    min="10"
                    max="500"
                    value={maxLength}
                    onChange={(e) => setMaxLength(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum number of tokens in the output
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="output">Output</Label>
                <div
                  id="output"
                  className="border rounded-md p-3 min-h-32 bg-secondary/30"
                >
                  {loading ? (
                    <div className="flex h-full items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                      <span className="ml-2">Processing...</span>
                    </div>
                  ) : outputText ? (
                    <pre className="whitespace-pre-wrap">{outputText}</pre>
                  ) : (
                    <p className="text-muted-foreground text-center">
                      Output will appear here after processing
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-xs text-muted-foreground">
              This is a simple demonstration running on pre-trained models via the Hugging Face API.
              Performance is for illustrative purposes.
            </p>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                "Run Analysis"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AIPlayground;
