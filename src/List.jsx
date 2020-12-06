import React from 'react';

export default function List ({ selectedLists }) {
  return (
    <ol>
      {selectedLists.map((item) => (
        <li key={item.id}>
          {item.content}
        </li>
      ))}
    </ol>
  );
} 