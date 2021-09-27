import {
  screen
} from '@testing-library/react';

import {
  renderWith,
  setup
} from '../../setupTests';

import Modal from './Modal';

describe('Testing <Modal />', () => {
  setup(beforeEach)(
    () => renderWith()(
      <Modal />
    )
  );

  test('Renders', () => {
    expect(
      screen.getByText('Add Question')
    ).toBeInTheDocument();
  });
});
