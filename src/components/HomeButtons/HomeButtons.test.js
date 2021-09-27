import {
  screen
} from '@testing-library/react';

import {
  renderWith,
  setup
} from '../../setupTests';

import HomeButtons from './HomeButtons';

describe('Testing <HomeButtons />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <HomeButtons />
    )
  );

  test('Renders', () => {
    expect(
      screen.getByText('Add Question')
    ).toBeInTheDocument();
  });
});
