import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import EditQuestionForm from './EditQuestionForm';

describe('Testing <EditQuestionForm />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <EditQuestionForm
        onSubmit={() => {}}
        isLoading={false}
        question={{
          question: 'Test Question',
          answer: 'Test Answer'
        }}
      />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('Question Text')
    ).toBeInTheDocument();
  });
});
