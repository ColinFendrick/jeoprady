import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import AddPlayerForm from './AddPlayerForm';

describe('Testing <AddPlayerForm />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <AddPlayerForm
        onSubmit={() => {}}
        isLoading={false}
      />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('Username')
    ).toBeInTheDocument();
  });
});
