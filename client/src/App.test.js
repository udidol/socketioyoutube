import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App text', () => {
  render(<App />);
  const AppElement = screen.getByText(/App/i);

  expect(AppElement).toBeInTheDocument();
});
