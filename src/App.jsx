import React, { useState } from 'react';
import WordInput from './components/WordInput';
import GridSizeInput from './components/GridSizeInput';
import DifficultySelect from './components/DifficultySelect';
import CrosswordGrid from './components/CrosswordGrid';
import WordList from './components/WordList';
import { generateCrossword } from './utils/crosswordGenerator';
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  const [gridSize, setGridSize] = useState(12);
  const [difficulty, setDifficulty] = useState('medium');
  const [crosswordGrid, setCrosswordGrid] = useState([]);
  const [usedWords, setUsedWords] = useState([]);

  const handleGenerateCrossword = () => {
    const { grid, used } = generateCrossword(words, gridSize, difficulty);
    setCrosswordGrid(grid);
    setUsedWords(used);
  };

  return (
    <div className="App">
      <h2>填字游戏生成器</h2>
      <div className="app-container">
        <WordInput onWordsChange={setWords} />
        <GridSizeInput value={gridSize} onChange={setGridSize} />
        <DifficultySelect value={difficulty} onChange={setDifficulty} />
        <button onClick={handleGenerateCrossword}>生成填字游戏</button>
        <CrosswordGrid grid={crosswordGrid} />
        <WordList usedWords={usedWords} allWords={words} />
      </div>
    </div>
  );
}

export default App;