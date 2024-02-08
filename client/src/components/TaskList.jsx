import React from 'react'
import { useEffect,useState } from 'react';
import  {getAllTask}  from '../api/Task.api';
import TaskCard from './TaskCard';


const TaskList = () => {

  const [tasks, setTasks] = useState([])

    useEffect(() =>{

      async function loadTask() {
       const res = await getAllTask()
       setTasks(res.data)
      }

       loadTask();

    },[]);

  return (
    <div className="grid grid-cols-3 gap-3">
    { tasks.map(tasks =>(
       <TaskCard key={tasks.id}  tasks={tasks} />
    ))}
  </div>
  )
}

export default TaskList
