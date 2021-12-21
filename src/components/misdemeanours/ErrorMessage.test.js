import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders error', () => {
  render(<ErrorMessage error={{message:"This is an error"}} />);
  const errorMessage = screen.getByText(/This is an error/i);
  expect(errorMessage).toBeInTheDocument();
});