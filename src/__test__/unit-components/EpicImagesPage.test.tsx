import React from 'react';
import { render, screen } from '@testing-library/react';
import router, { RouterPages } from '../../router';
import EpicImagesPage from '../../pages/EpicImagesPage';

test('Renders EpicImagesPage', () => {
  render(<EpicImagesPage />);

  expect(screen.getByTestId(router[RouterPages.epic].testId)).toBeInTheDocument();
});
