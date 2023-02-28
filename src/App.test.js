import { render, screen, cleanup, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {

  afterEach(() => {
    window.localStorage.clear();
    cleanup();
  });

  test('will render app container', () => {
    render(<App />);
    const appWrapper = screen.getByTestId('app');
    expect(appWrapper).toBeInTheDocument();
  });

  test('will add tasks', async () => {
    render(<App />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    const input = screen.getByTestId('input');

    await userEvent.type(input, 'test task 1');
    await userEvent.click(addButton);
    await userEvent.type(input, 'test task 2');
    await userEvent.click(addButton);

    const tasks = screen.getAllByTestId('task-name');

    expect(tasks.length).toBe(2);
    expect(tasks[0].textContent).toBe('test task 1');
    expect(tasks[1].textContent).toBe('test task 2');
  });

  test('will edit task', async () => {
    render(<App />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    const input = screen.getByTestId('input');

    await userEvent.type(input, 'test task 1');
    await userEvent.click(addButton);

    const task = screen.getByTestId('task-name');
    expect(task.textContent).toBe('test task 1');

    const editTaskBtn = screen.getByTestId('edit-task');
    await userEvent.click(editTaskBtn);
    await userEvent.type(input, ' edited');
    await userEvent.click(addButton);

    const editedTask = screen.getByTestId('task-name');
    expect(editedTask.textContent).toBe('test task 1 edited');
  });

  test('will remove task', async () => {
    render(<App />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    const input = screen.getByTestId('input');

    await userEvent.type(input, 'test task');
    await userEvent.click(addButton);

    const task = screen.getByTestId('task-name');

    expect(task).toBeInTheDocument();
    expect(task.textContent).toBe('test task');

    const removeTaskButton = screen.getByTestId('remove-task');
    await userEvent.click(removeTaskButton);

    const taskAfterRemove = screen.queryByTestId('task-name');

    expect(taskAfterRemove).not.toBeInTheDocument();
  });

  test('will remove all tasks', async () => {
    render(<App />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    const input = screen.getByTestId('input');

    await userEvent.type(input, 'test task 1');
    await userEvent.click(addButton);
    await userEvent.type(input, 'test task 2');
    await userEvent.click(addButton);

    const tasks = screen.getAllByTestId('task-name');

    expect(tasks.length).toBe(2);
    expect(tasks[0].textContent).toBe('test task 1');
    expect(tasks[1].textContent).toBe('test task 2');

    const clearAllButton = screen.getByRole('button', {name: 'Clear All'});
    await userEvent.click(clearAllButton);

    const tasksAfterClearAll = screen.queryAllByTestId('task-name');

    expect(tasksAfterClearAll.length).toBe(0);
  });

  test('will display amount of tasks', async () => {
    render(<App />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    const input = screen.getByTestId('input');

    await userEvent.type(input, 'test task 1');
    await userEvent.click(addButton);
    await userEvent.type(input, 'test task 2');
    await userEvent.click(addButton);
    await userEvent.type(input, 'test task 3');
    await userEvent.click(addButton);

    expect(screen.getByTestId('counter').textContent).toBe('3');
  });

})


