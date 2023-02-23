import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  test('will render', () => {
    render(<App />);
    const appWrapper = screen.getByTestId('app');
    expect(appWrapper).toBeInTheDocument();
  });

})


