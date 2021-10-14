import { render, screen, fireEvent, within } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('it lists todos and adds to list', () => {
    render(<App />);

    const todos = screen.getByTestId(/todo-list/);

    const addTodo = screen.getByTestId(/add-todo/);
    const addTodoInput = screen.getByPlaceholderText(/Write something.../);
    const addTodoButton = within(addTodo).getByText(/Submit/);

    fireEvent.change(addTodoInput, { target: { value: 'New todo' } });
    fireEvent.click(addTodoButton);

    expect(within(todos).getAllByTestId(/todo/)).toHaveLength(1);
  });

  test('it removes from list on removeTodo', () => {
    render(<App />);

    const addTodo = screen.getByTestId(/add-todo/);
    const addTodoInput = screen.getByPlaceholderText(/Write something.../);
    const addTodoButton = within(addTodo).getByText(/Submit/);

    fireEvent.change(addTodoInput, { target: { value: 'New todo' } });
    fireEvent.click(addTodoButton);
    fireEvent.change(addTodoInput, { target: { value: 'New todo' } });
    fireEvent.click(addTodoButton);

    const [firstTodo] = screen.getAllByTestId('todo');
    const removeTodoButton = within(firstTodo).getByText(/X/);
    fireEvent.click(removeTodoButton);

    expect(screen.getAllByTestId('todo')).toHaveLength(1);
  });
});
