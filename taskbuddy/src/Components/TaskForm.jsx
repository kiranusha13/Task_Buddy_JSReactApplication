import React, {useState} from 'react'

function TaskForm() {
    const [task,setTask] = useState('');
  return (
    <div>
        <form>
        <input type='text'
        placeholder='Enter Your Task' 
        required 
        value = {task}
        onChange = {(e) => setTask(e.target.value)} />

        <h1>{task}</h1>
        </form>

    </div>
  )
}

export default TaskForm