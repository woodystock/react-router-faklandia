import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders webiste header', () => {
  render(<Header />);
  const siteTitle = screen.getByText(/Faklandia Justice Department/i);
  expect(siteTitle).toBeInTheDocument();
});