import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import PageContainer from '../../components/PageContainer/PageContainer';

test('renders PageContainer Component', () => {
  render(<PageContainer>Test</PageContainer>);
  
  expect(screen.getByText('Test')).toBeInTheDocument();
});
