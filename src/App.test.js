import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {

  test('will render app container', () => {
    render(<App />);
    const appWrapper = screen.getByTestId('app');
    expect(appWrapper).toBeInTheDocument();
  });

  test('will add task', async () => {
    render(<App />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    const input = screen.getByTestId('input');

    await userEvent.type(input, 'test task');
    await userEvent.click(addButton);

    expect(screen.getByTestId('task-name').textContent).toBe('test task');

    screen.debug(undefined, 30000)
  });

})


