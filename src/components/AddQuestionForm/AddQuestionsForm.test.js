import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import AddQuestionsForm from './AddQuestionsForm';

describe('Testing <AddQuestionsForm />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <AddQuestionsForm
        onSubmit={() => {}}
        isLoading={false}
      />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('Question Text')
    ).toBeInTheDocument();
  });
});
