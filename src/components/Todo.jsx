import React, { useEffect, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

// Manages the state of the task list, handles adding and updating tasks, and renders the TaskForm and TaskList. 

const Todo = () => {
  // State to store the task list and the task to be edited.
  const [taskList, setTaskList] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  );
  const [taskToEdit, setTaskToEdit] = useState(null);

  // useEffect to save the task list to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className='bg-white place-self-center w-[700px] flex 
    flex-col p-7 min-h-[550px] rounded-xl'>
      {/* Title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-do-list</h1>
      </div>

      {/* Task Form */}
      <TaskForm
        taskToEdit={taskToEdit}
        setTaskList={setTaskList}
        setTaskToEdit={setTaskToEdit}
      />

      {/* Task List */}
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
};

export default Todo;
