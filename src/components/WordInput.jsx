import React, { useState } from 'react';

function WordInput({ onWordsChange }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    const words = e.target.value.split('\n').filter(word => word.trim() !== '');
    onWordsChange(words);
  };

  return (
    <textarea
      value={input}
      onChange={handleChange}
      placeholder={`请输入单词，每行输入一个单词\u000A建议8～12个单词为宜\u000A网格尺寸为单词数量的1.5～1.8倍`}
      rows={6}
      cols={30}
    />
  );
}

export default WordInput;