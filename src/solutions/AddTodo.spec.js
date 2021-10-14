import { render, screen, fireEvent } from '@testing-library/react';

import AddTodo from '../components/AddTodo';

describe('Todo', () => {
  test('it renders input and button', () => {
    render(<AddTodo />);

    const input = screen.getByPlaceholderText(/Write something.../);
    const button = screen.getByText(/Submit/);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('button is disabled if input is empty', () => {
    render(<AddTodo />);

    const button = screen.getByText(/Submit/);
    expect(button).toBeDisabled();
  });

  test('button is enabled if input is not empty', () => {
    render(<AddTodo />);

    const button = screen.getByText(/Submit/);
    const input = screen.getByPlaceholderText(/Write something.../);

    fireEvent.change(input, { target: { value: 'This is a todo' } });
    expect(button).not.toBeDisabled();
  });

  test('it calls addTodo on click', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);

    const todo = 'This is a todo';

    const button = screen.getByText(/Submit/);
    const input = screen.getByPlaceholderText(/Write something.../);

    fireEvent.change(input, { target: { value: todo } });
    fireEvent.click(button);

    expect(addTodo).toHaveBeenCalledWith(todo);
  });
});
