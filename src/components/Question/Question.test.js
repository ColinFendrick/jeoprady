import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Question from './Question';

describe('Testing <Question />', () => {
  const question = {
    question: 'How many stones is 112 pounds?',
    answer: '4'
  };
  const modalState = [true, () => {}];
  setup(beforeEach)(
    () => renderWith()(
      <Question
        modalState={modalState}
        question={question}
      />)
  );

  test('Renders', () => {
    expect(
      screen.getByText(question.question)
    ).toBeInTheDocument();
  });
});
