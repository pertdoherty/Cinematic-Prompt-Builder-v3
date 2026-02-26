import React from 'react';
import PromptBuilder from './components/PromptBuilder';

function App() {
  return (
    <div className="app-wrapper">
      <header className="top-nav">
        <div className="logo">
          Cinematic Prompt Builder
        </div>
        <div className="user-nav">
          v1.0
        </div>
      </header>

      <PromptBuilder />
    </div>
  );
}

export default App;
