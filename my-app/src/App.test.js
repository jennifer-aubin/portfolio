import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre du portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument();
});
