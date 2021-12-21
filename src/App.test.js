import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webiste header', () => {
  render(<App />);
  const siteTitle = screen.getByText(/Faklandia Justice Department/i);
  expect(siteTitle).toBeInTheDocument();
});


