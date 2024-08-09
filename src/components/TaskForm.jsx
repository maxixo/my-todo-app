import React, { useEffect, useRef, useState } from 'react';


//This component will manage the form inputs for adding or editing tasks.

const TaskForm = ({ taskToEdit, setTaskList, setTaskToEdit }) => {
  const nameRef = useRef();
  const descRef = useRef();
  const [errors, setErrors] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      nameRef.current.value = taskToEdit.text;
      descRef.current.value = taskToEdit.description;
    }
  }, [taskToEdit]);

  // for form validation
  const validate = () => {
    const inputText = nameRef.current.value.trim();
    const inputDesc = descRef.current.value.trim();
    const newErrors = { name: '', description: '' };

    if (!inputText) {
      newErrors.name = 'Task name is required';
    }
    if (!inputDesc) {
      newErrors.description = 'Task description is required';
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.description;
  };

  
  const addOrUpdateTask = () => {
    if (!validate()) return;

    const inputText = nameRef.current.value.trim();
    const inputDesc = descRef.current.value.trim();

    if (taskToEdit) {
      // Update existing task
      setTaskList((prev) =>
        prev.map((task) =>
          task.id === taskToEdit.id
            ? { ...task, text: inputText, description: inputDesc }
            : task
        )
      );
      setTaskToEdit(null); // Clear the edit state
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        text: inputText,
        description: inputDesc,
        isComplete: false,
      };

      setTaskList((prev) => [...prev, newTask]);
    }

    nameRef.current.value = '';
    descRef.current.value = '';
    setErrors({ name: '', description: '' }); // Clear errors after successful submission
  };

  return (
    <div className='flex gap-3 flex-row items-center my-7 bg-gray-200 rounded-full max-w-xl place-self-center'>
      <div className='flex flex-col'>
        <input
          ref={nameRef}
          className={`bg-transparent border-0 outline-none h-14 pl-6 pr-2 placeholder:text-slate-600 ${errors.name ? 'border-red-500' : ''}`}
          type="text"
          placeholder='Add task name'
        />
        {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
      </div>
      <div className='flex flex-col'>
        <input
          ref={descRef}
          className={`bg-transparent border-0 outline-none h-14 pl-6 pr-2 placeholder:text-slate-600 ${errors.description ? 'border-red-500' : ''}`}
          type="text"
          placeholder='Add task description'
        />
        {errors.description && <span className='text-red-500 text-sm'>{errors.description}</span>}
      </div>
      <button onClick={addOrUpdateTask} className=' border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer self-end'>
        {taskToEdit ? 'Update Task' : 'Add +'}
      </button>
    </div>
  );
};

export default TaskForm;