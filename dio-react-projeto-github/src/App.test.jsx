import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello react', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});