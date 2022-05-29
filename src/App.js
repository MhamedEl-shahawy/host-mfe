import React,{useEffect} from 'react';
import { loadComponent } from './utils/loadComponent';
import MyErrorBoundary from "./MyErrorBoundary";
import TodoList from './components/TodoList';

function System(props) {
  const {
    system,
    system: { remote, url, module },
  } = props;

  if (!system || !remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Component = React.lazy(loadComponent(remote, 'default', module, url));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

function App() {
  const [system, setSystem] = React.useState({});

  function setApp2() {
    setSystem({
      remote: 'nav',
      url: 'https://cra-nav.vercel.app/remoteEntry.js',
      module: './Header',
    });
  }
useEffect(()=>{
    setApp2();
},[])
  return (
    <div className="App">
      <MyErrorBoundary>
        <System system={system} />
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