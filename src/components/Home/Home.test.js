import { screen } from '@testing-library/react';

import {
  renderWith,
  setup,
  withContext
} from '../../setupTests';

import Home from './Home';

describe('Testing <Home />', () => {
  setup(beforeEach)(
    () => renderWith(withContext)(<Home />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('First question')
    ).toBeInTheDocument();
  });
});
