import React from 'react';

export default function Choices({ questions, onClickAddQuestion }){
  return (
    <div>
      <button type="button" onClick={() => onClickAddQuestion(questions[0])}>예</button>
      <button type="button" >아니오</button>
    </div>
  );
}