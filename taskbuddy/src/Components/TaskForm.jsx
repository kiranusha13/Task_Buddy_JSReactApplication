import React, {useState} from 'react'
import '../Style.css'

function TaskForm(addTask) {
    const [task,setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General");

    const handlesubmit = (e) => {

      e.preventDefault();
      addTask({text: task,
               priority,
               category,
               completed:false
      }) //set data to addTask()

      //Reset state
      setPriority("Medium");
      setCategory("General");
      setTask('');
    }
  return (
    <div>
        <form className='task-form' onSubmit = {handlesubmit}>
          <div id = "inp">
        <input type='text'
        placeholder='Enter Your Task' 
        required 
        value = {task}
        onChange = {(e) => setTask(e.target.value)} />

        <span><button>Add Task</button></span>

        <div id="btns">
          <select value = {priority} onChange = {(e) => setPriority(e.target.value)}>
            <option value = "Medium">Medium</option>
            <option value = "Low">Low</option>
            <option value = "High">High</option>
          </select>

          <select value = {category} onChange = {(e) => setCategory(e.target.value)}>
            <option value = "General">General</option>
            <option value = "Work">Work</option>
            <option value = "Personal">Personal</option>
          </select>
        </div>

        </div>
        </form>

    </div>
  )
}

export default TaskForm