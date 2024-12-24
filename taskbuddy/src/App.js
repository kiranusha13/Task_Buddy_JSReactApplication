
import React, { useState , useEffect} from 'react'
import TaskForm from './Components/TaskForm'
import './Style.css'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

function App() {
  useEffect(() => {
    alert('Hello')
  },[])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  }, [tasks])

  const addTask = (task) => {
      setTasks([...tasks, task])
  }

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  return (
    <div className='App'>

      <h1>Task Buddy</h1>
      <TaskForm addTask = {addTask} />
      <TaskList tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
    </div>
  )
}

export default App
