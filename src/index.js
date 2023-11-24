import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskApp from './Todo/todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TaskApp/>
  </React.StrictMode>
);