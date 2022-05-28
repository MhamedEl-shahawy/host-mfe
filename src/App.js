import React from 'react';
import TodoList from './components/TodoList';
import Header from "nav/Header";
import "./app.css";

import {  useStore } from "store/store";
import MyErrorBoundary from "./MyErrorBoundary";
function App() {
  const {count} = useStore();
  return (
    <div className="App">
             <MyErrorBoundary>
           <Header />
           </MyErrorBoundary>

            <div className='todo-app'>
            <MyErrorBoundary>
            <TodoList />
            </MyErrorBoundary>
          </div>
    </div>
  );
}

export default App;
