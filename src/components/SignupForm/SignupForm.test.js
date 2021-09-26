import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import SignupForm from './SignupForm';

describe('Testing <SignupForm />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <SignupForm
        onSubmit={() => {}}
        loading={false}
        message='test message'
      />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('test message')
    ).toBeInTheDocument();
  });
});
