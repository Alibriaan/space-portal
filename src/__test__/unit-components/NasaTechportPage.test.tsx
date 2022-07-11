import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import router, { RouterPages } from '../../router';
import NasaTechPortPage from '../../pages/NasaTechport/NasaTechport';

test('Renders NasaTechport page', () => {
  render(<NasaTechPortPage />);

  expect(screen.getByTestId(router[RouterPages.nasaTechport].testId)).toBeInTheDocument();
});
