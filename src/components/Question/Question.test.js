import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Question from './Question';

describe('Testing <Question />', () => {
  setup(beforeEach)(
    () => renderWith()(<Question />)
  );

  test('Renders', () => {
    expect(
      screen.getByText('react-transition-group')
    ).toBeInTheDocument();
  });
});
