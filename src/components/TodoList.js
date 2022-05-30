import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {  useStore } from "../store";

function TodoList() {
  const { count, increment } = useStore();


  console.log(count)

  

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <Todo/>
    </>
  );
}

export default TodoList;
