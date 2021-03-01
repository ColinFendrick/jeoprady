import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Tile from './Tile';

describe('Testing <Tile />', () => {
  const question = {
    title: 'Second Question',
    content: 'How many stones is 112 pounds?',
    answer: '4'
  };

  setup(beforeEach)(
    () => renderWith()(<Tile question={question} />)
  );

  test('Renders', () => {
    expect(
      screen.getByText(question.title)
    ).toBeInTheDocument();
  });
});
