import { render, screen, within } from '@testing-library/react';
import AddTask from './AddTask';

describe('AddTask component', () => {
  test('will render the main wrapper', () => {
    render(<AddTask />);
    const wrapper = screen.getByTestId('component-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  test('will render form', () => {
    render(<AddTask />);
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument();
  });
})

describe('Form', () => {
  test('will have an input', () => {
    render(<AddTask />);
    const input = screen.getByPlaceholderText('add task');
    expect(input).toBeInTheDocument();
  })

  test('will have Add button', () => {
    render(<AddTask />);
    const addButton = screen.getByRole('button', {name: 'Add'});
    expect(addButton).toBeInTheDocument();
  })
})


