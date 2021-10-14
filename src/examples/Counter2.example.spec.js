import { render, screen, fireEvent } from '@testing-library/react';

import Counter2 from './Counter2.example';

describe('CounterExample', () => {
  test('it renders', () => {
    // Arrange
    render(<Counter2 />);

    // assert
    expect(screen.getByText('Count', { exact: false })).toBeInTheDocument();
  });

  test('it increments counter on click', () => {
    // Arrange
    render(<Counter2 />);

    // assert
    const countElement = screen.getByText('Count', { exact: false });
    const button = screen.getByText('Add one');

    expect(countElement).toHaveTextContent('Count is 0');
    fireEvent.click(button);
    expect(countElement).toHaveTextContent('Count is 1');
  });
});
