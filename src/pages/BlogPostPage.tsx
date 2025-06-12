import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPostPage = () => {
  const { blogPostId } = useParams<{ blogPostId: string }>();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (blogPostId) {
      const fetchMarkdown = async () => {
        try {
          setLoading(true);
          // Vite specific: dynamically import the markdown file as a raw string
          const module = await import(`../blog/${blogPostId}.md?raw`);
          setMarkdown(module.default);
          setError(null);
        } catch (e) {
          console.error("Failed to load blog post:", e);
          setError('Failed to load the blog post. It might not exist.');
        } finally {
          setLoading(false);
        }
      };

      fetchMarkdown();
    }
  }, [blogPostId]);

  if (loading) {
    return <div className="container py-12 text-center">Loading post...</div>;
  }

  if (error) {
    return <div className="container py-12 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container py-12">
      <article className="prose dark:prose-invert max-w-4xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPostPage;
