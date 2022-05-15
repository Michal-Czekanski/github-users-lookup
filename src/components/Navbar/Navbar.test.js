import { render, screen } from '@testing-library/react';
import { APP_NAME } from '../../assets/strings';
import Navbar from './Navbar';
import React from 'react';

test('renders Navbar', () => {
  render(<Navbar />);

  const textElement = screen.getByText(APP_NAME);
  expect(textElement).toBeInTheDocument();

  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});
