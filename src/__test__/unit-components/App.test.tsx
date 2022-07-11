import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import router, { RouterPages } from '../../router';

test('Renders App', () => {
  render(<App />);

  expect(screen.getByTestId(router[RouterPages.mainPage].testId)).toBeInTheDocument();
});
