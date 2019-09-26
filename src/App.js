import React from 'react';
import { useState } from 'react';
const initialState = [
  {
    text: 'Learn about React',
    isCompleted: false
  },
  {
    text: 'Meet friend for Lunch',
    isCompleted: false
  },
  {
    text: 'Build really cool todo App',
    isCompleted: false
  }
];
export default function App() {
  const [todos, setTodos] = useState(initialState);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
      </div>
    </div>
  );
}
export const Todo = ({ todo, index, completeTodo }) => <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>{todo.text}<div><button onClick={()=>completeTodo(index)}>Complete</button></div></div>;

export function TodoForm({ addTodo }) {
  const [ value, setValue ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
      className='input'
      value={value}
      onChange={e => setValue(e.target.value)} />
    </form>
  )
}
const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}
