import React from 'react';

export const Task = (props) => {
  
  return(
    <div>
      {
        props.allTasks.map((task) => (
          <li key = {task._id}>{task.text}</li>
        ))
      }
  </div>
  )
}
