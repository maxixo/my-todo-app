import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TaskItems from './TaskItems';

const Todo = () => {

const [taskList , setTaskList] = useState(localStorage.getItem('tasks')?
JSON.parse(localStorage.getItem('tasks')) : []); 

const [taskToEdit, setTaskToEdit] = useState(null);


const nameRef = useRef();
const descRef= useRef();


const add = () => {
   const inputText = nameRef.current.value.trim();
   const inputDesc = descRef.current.value.trim();

   if (inputText && inputDesc === '') {
    return null
    
   }
    
   const newTask = {
    id: Date.now(),
    text: inputText,
    description: inputDesc,
    iscomplete: false,
   }

    setTaskList((prev) => [...prev, newTask]);
    nameRef.current.value = '';
    descRef.current.value = '';

}

 const deleteTask = (id) => {
   setTaskList((prevTask) => {
    return prevTask.filter((task) => task.id !== id)
   })

 }
 const toggle = (id) => {
   setTaskList((prevTask) => {
    return prevTask.map((task) => {
      if(task.id === id) {
        return {...task, isComplete: !task.isComplete}
      }
       return task;

    })
   })
 }

 useEffect(() => {
 localStorage.setItem('tasks', JSON.stringify(taskList));

}, [taskList])

  return (
    <div className='bg-white place-self-center w-[700px]  flex 
    flex-col p-7 min-h-[550px] rounded-xl'>
 
    {/* --- titile ---- */}
    <div className='flex items-center mt-7 gap-2'>
    <img className='w-8' src={todo_icon} alt="" />  
     <h1 className='text-3xl font-semibold'>To-do-list</h1>
    </div>

    {/* input box */}
    <div className='flex gap-3 flex-row items-center my-7 bg-gray-200 rounded-full max-w-xl place-self-center'>
        <input ref={nameRef} className='bg-transparent border-0 
        outline- h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add task name' />
        <input  ref={descRef}className='bg-transparent border-0
         outline- h-14 pl-6 pr-2 placeholder:text-slate-600 'type="text" placeholder='Add task description' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD + </button>
    </div>
        {/* Todo list */}

        <div>
          {taskList.map((item, index) =>{ 
           return <TaskItems key={index}
            text={item.text}
            description={item.description}
            id={item.id}
            isComplete={item.isComplete}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
            toggle={toggle}
              />
            
        })}
        </div>



    </div>
  )
}

export default Todo