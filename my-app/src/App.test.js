import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('page contact affiche le formulaire', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByLabelText(/^e-mail$/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /^envoyer$/i })).toBeInTheDocument();
});
