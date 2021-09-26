import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import LoginForm from './LoginForm';

describe('Testing <LoginForm />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <LoginForm
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
