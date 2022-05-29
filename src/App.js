import React,{Suspense} from 'react';
import TodoList from './components/TodoList';
// import Header from "nav/Header";
import "./app.css";
import {RemoteComponent} from "react-dynamic-remote-component"
import {  useStore } from "store/store";
import MyErrorBoundary from "./MyErrorBoundary";
function App() {
  const {count} = useStore();
  return (
    <div className="App">
              <Suspense fallback={"loading"}>
             <MyErrorBoundary>
               <RemoteComponent
                url="https://nb-nav.vercel.app/remoteEntry.js"
                scope="nav"
                module='./Header'
               />
           </MyErrorBoundary>
           </Suspense>


            <div className='todo-app'>
            <MyErrorBoundary>
            <TodoList />
            </MyErrorBoundary>
          </div>
    </div>
  );
}

export default App;
