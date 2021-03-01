import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Tile from './Tile';

describe('Testing <Tile />', () => {
  setup(beforeEach)(
    () => renderWith()(<Tile question='test-question' />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('test-question')
    ).toBeInTheDocument();
  });
});
