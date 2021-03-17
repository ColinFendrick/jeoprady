import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Signup from './Signup';

describe('Testing <Signup />', () => {
  setup(beforeEach)(
    () => renderWith()(<Signup />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('testing text')
    ).toBeInTheDocument();
  });
});
