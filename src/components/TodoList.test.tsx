import { render } from '@testing-library/react';
import TodoList from './TodoList';

const todos = [
  {
    id: 1,
    text: 'Test todo 1',
    completed: false,
  },
  {
    id: 2,
    text: 'Test todo 2',
    completed: true,
  },
];

const toggleTodo = (id: number) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  return updatedTodos; 
};

const deleteTodo = (id: number) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  return updatedTodos;
};

test('TodoList renders correctly', () => {
  const { getByText } = render(
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  );
  const todo1 = getByText('Test todo 1');
  const todo2 = getByText('Test todo 2');
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
});
