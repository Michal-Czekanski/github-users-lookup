import { render, screen } from '@testing-library/react';

test('renders "Hello World!"', () => {
  render(<h1>Hello World!</h1>);
  const linkElement = screen.getByText("Hello World!");
  expect(linkElement).toBeInTheDocument();
});
