import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

const toggleTodoMock = jest.fn();
const deleteTodoMock = jest.fn();

const todo = {
  id: 1,
  text: 'Test todo',
  completed: false,
};

test('TodoItem renders correctly', () => {
  const { getByText } = render(
    <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />
  );
  const todoText = getByText('Test todo');
  expect(todoText).toBeInTheDocument();
});

test('Toggle button calls toggleTodo', () => {
  const { getByText } = render(
    <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />
  );
  const toggleButton = getByText('Выполнено');
  fireEvent.click(toggleButton);
  expect(toggleTodoMock).toHaveBeenCalledWith(1);
});

test('Delete button calls deleteTodo', () => {
  const { getByText } = render(
    <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />
  );
  const deleteButton = getByText('Удалить');
  fireEvent.click(deleteButton);
  expect(deleteTodoMock).toHaveBeenCalledWith(1);
});
