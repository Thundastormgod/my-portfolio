
import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Connection {
  source: number;
  target: number;
}

const NeuralNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const renderedNodesRef = useRef<HTMLDivElement[]>([]);
  const renderedConnectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create nodes
    const numNodes = Math.min(30, Math.floor(window.innerWidth / 40));
    
    const generateNodes = () => {
      const nodes: Node[] = [];
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * container.offsetWidth,
          y: Math.random() * container.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
      return nodes;
    };

    // Create connections between nodes
    const generateConnections = () => {
      const connections: Connection[] = [];
      const numConnections = numNodes * 2;
      
      for (let i = 0; i < numConnections; i++) {
        const source = Math.floor(Math.random() * numNodes);
        let target = Math.floor(Math.random() * numNodes);
        
        // Make sure target isn't the same as source
        while (target === source) {
          target = Math.floor(Math.random() * numNodes);
        }
        
        connections.push({ source, target });
      }
      
      return connections;
    };

    // Create DOM elements for nodes and connections
    const createNetworkElements = () => {
      // Clear previous elements
      renderedNodesRef.current.forEach(node => node.remove());
      renderedConnectionsRef.current.forEach(conn => conn.remove());
      
      renderedNodesRef.current = [];
      renderedConnectionsRef.current = [];
      
      // Create new node elements
      nodesRef.current.forEach(() => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node';
        container.appendChild(nodeEl);
        renderedNodesRef.current.push(nodeEl);
      });
      
      // Create new connection elements
      connectionsRef.current.forEach(() => {
        const connEl = document.createElement('div');
        connEl.className = 'connection';
        container.appendChild(connEl);
        renderedConnectionsRef.current.push(connEl);
      });
    };

    // Update node and connection positions
    const updateNetwork = () => {
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Move node
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off boundaries
        if (node.x <= 0 || node.x >= containerWidth) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(containerWidth, node.x));
        }
        
        if (node.y <= 0 || node.y >= containerHeight) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(containerHeight, node.y));
        }
        
        // Update DOM element
        const nodeEl = renderedNodesRef.current[i];
        nodeEl.style.left = `${node.x}px`;
        nodeEl.style.top = `${node.y}px`;
      }
      
      // Update connection positions
      for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        const sourceNode = nodes[connection.source];
        const targetNode = nodes[connection.target];
        
        const connEl = renderedConnectionsRef.current[i];
        
        // Calculate distance and angle
        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // Update connection element
        connEl.style.width = `${distance}px`;
        connEl.style.left = `${sourceNode.x}px`;
        connEl.style.top = `${sourceNode.y}px`;
        connEl.style.transform = `rotate(${angle}deg)`;
      }
      
      animationFrameRef.current = requestAnimationFrame(updateNetwork);
    };

    const handleResize = () => {
      if (!container) return;
      
      // Regenerate network on resize
      nodesRef.current = generateNodes();
      connectionsRef.current = generateConnections();
      createNetworkElements();
    };

    // Initialize
    nodesRef.current = generateNodes();
    connectionsRef.current = generateConnections();
    createNetworkElements();
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(updateNetwork);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      renderedNodesRef.current.forEach(node => node.remove());
      renderedConnectionsRef.current.forEach(conn => conn.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="neural-network">
      {/* Nodes and connections will be created in JS */}
    </div>
  );
};

export default NeuralNetwork;
