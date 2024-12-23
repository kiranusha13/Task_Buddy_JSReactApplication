import React, {useState} from 'react'
import '../Style.css'

function TaskForm() {
    const [task,setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General")
  return (
    <div>
        <form className='task-form'>
        <input type='text'
        placeholder='Enter Your Task' 
        required 
        value = {task}
        onChange = {(e) => setTask(e.target.value)} />

        <span><button>Add Task</button></span>

        <div className='btns'>
          <select value = {priority} onChange = {(e) => setPriority(e.target.value)}>
            <option>Medium</option>
            <option>Low</option>
            <option>High</option>
          </select>

          <select value = {category} onChange = {(e) => setCategory(e.target.value)}>
            <option>General</option>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </div>
        </form>

    </div>
  )
}

export default TaskForm