import React from 'react';

export default function List ({ selectedLists }) {
  return (
    <li>
      {selectedLists.map((item) => (
        <p key={item.id}>
          {item.content}
        </p>
      ))}
    </li>
  );
} 