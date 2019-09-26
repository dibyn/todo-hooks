import React from 'react';
import { useState } from 'react';
const initialState = [
  {
    text: 'Learn about React'
  },
  {
    text: 'Meet friend for Lunch'
  },
  {
    text: 'Build really cool todo App'
  }
];
export default function App() {
  const [todos, setTodos] = useState(initialState);
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
export const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;
