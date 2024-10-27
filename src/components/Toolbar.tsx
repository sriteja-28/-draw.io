import React, { useState } from 'react';

interface ToolbarProps {
  addTextField: (label: string, value: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ addTextField }) => {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');

  const handleAddField = () => {
    if (label && value) {
      addTextField(label, value);
      setLabel('');
      setValue('');
    }
  };

  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddField}>Add Text Field</button>
    </div>
  );
};

export default Toolbar;
