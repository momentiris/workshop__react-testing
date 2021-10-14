import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter.example';

describe('Counter', () => {
  test('it renders', () => {
    render(<Counter />);

    const text = screen.getByText(/Count is 0/);
    const button = screen.getByText(/Add one/);
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('it increments on click', () => {
    render(<Counter />);

    const button = screen.getByText(/Add one/);
    const text = screen.getByRole('heading');

    fireEvent.click(button);

    expect(text).toHaveTextContent('Count is 1');
  });

  test('it calls orderCheeseBurgers', () => {
    const orderCheeseBurgers = jest.fn();
    render(<Counter orderCheeseBurgers={orderCheeseBurgers} />);

    const addOneButton = screen.getByText(/Add one/);

    fireEvent.click(addOneButton);
    fireEvent.click(addOneButton);

    const orderButton = screen.getByText(/Order/, { exact: false });

    fireEvent.click(orderButton);

    expect(orderCheeseBurgers).toHaveBeenCalledWith(2);
  });
});
