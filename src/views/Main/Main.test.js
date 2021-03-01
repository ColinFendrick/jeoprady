import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Main from './Main';

describe('Testing <Main />', () => {
  setup(beforeEach)(
    () => renderWith()(<Main>{'testing text'}</Main>)
  );

  test('Renders', () => {
    expect(
      screen.getByText('testing text')
    ).toBeInTheDocument();
  });
});
