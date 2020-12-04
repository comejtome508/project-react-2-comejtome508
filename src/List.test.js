import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const selectedLists = [
    {
      id: 1,
      content: 'Saved Question 1',
    },
    {
      id: 2,
      content: 'Saved Question 2',
    },
  ];


  const { container } = render((
    <List selectedLists={selectedLists} />
  ));

  expect(container).toHaveTextContent('Saved Question 1');
});