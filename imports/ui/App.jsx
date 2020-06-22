import React from 'react';
import { Task } from './Task.jsx';

export const App = () => {

  const allTasks = [
    {_id: 1, text: 'Task 1'},
    {_id: 2, text: 'Task 2'},
    {_id: 3, text: 'Task 3'}
  ]

  return(
    <div className = 'container'>
      <header>
        <h1>To-Do List</h1>
      </header>

      <ul>
      <Task allTasks = {allTasks} />
      </ul>
    </div>
  )
}
