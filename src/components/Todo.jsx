import React from 'react'
import todo_icon from '../assets/todo_icon.png';

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-2/4  flex 
    flex-col p-7 min-h-[550px] rounded-xl'>
 
    {/* --- titile ---- */}
    <div className='flex items-center mt-7 gap-2'>
      <img className='w-8' src={todo_icon} alt="" />  
     <h1 className='text-3xl font-semibold'>To-do-list</h1>
    </div>

    {/* input box */}
    <div>
        <input type="text" placeholder='Add task name' />
        <input type="text" placeholder='Add task description' />
        <button>ADD + </button>
    </div>
    </div>
  )
}

export default Todo