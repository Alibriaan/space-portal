import React from 'react';
import { render, screen } from '@testing-library/react';
import router, { RouterPages } from '../../router';
import PictureOfTheDayPage from '../../pages/PictureOfTheDayPage';

test('Renders EpicImagesPage', () => {
  render(<PictureOfTheDayPage />);

  expect(screen.getByTestId(router[RouterPages.pictureOfTheDay].testId)).toBeInTheDocument();
});
