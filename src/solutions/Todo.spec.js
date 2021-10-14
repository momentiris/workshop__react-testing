import { render, screen, fireEvent } from '@testing-library/react';

import Todo from '../components/Todo';

describe('Todo', () => {
  test('it renders with text and button', () => {
    render(<Todo text={'test'} />);

    const text = screen.getByText(/test/);
    const button = screen.getByText(/X/);

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('it calls removeTodo on click', () => {
    const removeTodo = jest.fn();
    render(<Todo removeTodo={removeTodo} />);

    const button = screen.getByText(/X/);
    fireEvent.click(button);
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });
});
