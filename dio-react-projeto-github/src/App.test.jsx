import { render, screen } from '@testing-library/react';
import App from './App';

test('renders basic interface', () => {
  render(<App />);

  const linkElement = screen.getByText(/GitHub/i);
  const profile = screen.getByText(/Profile/i)
  const repo = screen.getByText(/Repo/i)
  const button = screen.getByRole('button');

  expect(linkElement).toBeInTheDocument();
  expect(profile).toBeInTheDocument();
  expect(repo).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});