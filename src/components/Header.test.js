import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {

  test('will render the main wrapper', () => {
    render(<Header />);
    const wrapper = screen.getByTestId('component-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  test('will render logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Logo');

    expect(logo).toBeInTheDocument();
  });

  test('will render title', () => {
    render(<Header />);
    const title = screen.getByText('Task List');
    
    expect(title).toBeInTheDocument();
  });

  test('will render theme selectors', () => {
    render(<Header />);
    const selectors = screen.getAllByTestId('theme-selector');
    
    expect(selectors).toHaveLength(6);
  })

})


