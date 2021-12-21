import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const footerText = screen.getByText(/© Adam Cocking 2021/i);
  expect(footerText).toBeInTheDocument();
});