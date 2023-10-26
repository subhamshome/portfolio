import React, { useState } from 'react';
import '../styles/heroimage.css'; // Create a CSS file for styling

function HeroImage() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleHover = () => {
    const newNodes = generateRandomNodes();
    const newEdges = generateRandomEdges(newNodes);

    setNodes(newNodes);
    setEdges(newEdges);
  };

  const generateRandomNodes = () => {
    const numNodes = 5;
    const maxWidth = 500;
    const maxHeight = 300;

    return Array.from({ length: numNodes }, (_, index) => ({
      id: index.toString(),
      x: Math.random() * maxWidth,
      y: Math.random() * maxHeight,
    }));
  };

  const generateRandomEdges = (newNodes) => {
    const numEdges = 5;
    const edges = [];

    for (let i = 0; i < numEdges; i++) {
      const sourceIdx = Math.floor(Math.random() * newNodes.length);
      let targetIdx;
      do {
        targetIdx = Math.floor(Math.random() * newNodes.length);
      } while (targetIdx === sourceIdx);

      edges.push({
        source: newNodes[sourceIdx].id,
        target: newNodes[targetIdx].id,
      });
    }

    return edges;
  };

  return (
    <div className="hero-image" onMouseEnter={handleHover}>
      {edges.map((edge, index) => (
        <div
          key={index}
          className="edge"
          style={{
            top: edge.source.y,
            left: edge.source.x,
            width: Math.sqrt(
              (edge.target.x - edge.source.x) ** 2 +
                (edge.target.y - edge.source.y) ** 2
            ),
            transform: `rotate(${Math.atan2(
              edge.target.y - edge.source.y,
              edge.target.x - edge.source.x
            )}rad)`,
          }}
        />
      ))}

      {nodes.map((node) => (
        <div
          key={node.id}
          className="node"
          style={{ top: node.y, left: node.x }}
        />
      ))}
    </div>
  );
}

export default HeroImage;