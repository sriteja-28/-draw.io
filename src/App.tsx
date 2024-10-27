import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import './App.css'; // App-specific styles

const App: React.FC = () => {
  const [textFields, setTextFields] = useState<{ id: number; label: string; value: string }[]>([]);

  const addTextField = (label: string, value: string) => {
    setTextFields([...textFields, { id: Date.now(), label, value }]);
  };

  return (
    <div className="app">
      <Toolbar addTextField={addTextField} />
      <Canvas textFields={textFields} />
    </div>
  );
};

export default App;
