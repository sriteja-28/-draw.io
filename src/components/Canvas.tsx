import React from 'react';
import { Stage, Layer, Text } from 'react-konva';

interface CanvasProps {
  textFields: { id: number; label: string; value: string }[];
}

const Canvas: React.FC<CanvasProps> = ({ textFields }) => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight - 100}>
      <Layer>
        {textFields.map((field, index) => (
          <Text
            key={field.id}
            text={`${field.label}: ${field.value}`}
            fontSize={20}
            x={20}
            y={index * 30} // Stacking vertically
            draggable
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
