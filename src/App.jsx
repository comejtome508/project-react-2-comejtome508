import React, { useState } from 'react';

import Question from './Question';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    newId : 100,
    questions: [
      {
        id: 1,
        title : '숨이 온전하게 쉬어집니까?',
        content : '숨을 쉴 수 있어 감사',
      },
      {
        id: 2,
        title : '손발이 온전하게 움직입니까?',
        content : '손발이 온전히 움직임에 감사',
      },
    ],
    selectedLists: []
  });

  const { newId, questions, selectedLists } = state;

  function handleClickAddQuestion(content) {
    setState({
      ...state,
      newId: newId+1,
      selectedLists: [...selectedLists, {id: newId, content : content.content}],
    });
  }

  return (
    <div>
      <List selectedLists={selectedLists} />
      <hr />
      <Question questions={questions} onClickAddQuestion={handleClickAddQuestion} />
    </div>
  );
}