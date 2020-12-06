import React from 'react';
import Choices from './Choices';

export default function Question ({questions, onClickAddQuestion}) {
  return (
    <div>
      {questions[0].title}
      <Choices questions={questions}onClickAddQuestion={onClickAddQuestion} />
    </div>
  );
}