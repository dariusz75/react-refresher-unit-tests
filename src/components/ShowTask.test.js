import { render, screen } from '@testing-library/react';
import ShowTask from './ShowTask';

describe('ShowTask component', () => {

  test('will render the main wrapper', () => {
    render(<ShowTask />);
    const wrapper = screen.getByTestId('component-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  test('will render task counter', () => {
    render(<ShowTask />);
    const counter = screen.getByTestId('counter');
    expect(counter).toBeInTheDocument();
  });

  test('will have Add button', () => {
    render(<ShowTask />);
    const clearAllButton = screen.getByRole('button', {name: 'Clear All'});
    expect(clearAllButton).toBeInTheDocument();
  });
})


