import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import PositionedSkeleton from '../../components/PositionedSkeleton/PositionedSkeleton';

test('renders PositionedSkeleton Component', () => {
  render(<PositionedSkeleton variant='rectangular' width='100' height='100' />);
  
  expect(screen.getByTestId('positioned-skeleton')).toBeInTheDocument();
});
