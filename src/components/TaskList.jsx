import React from 'react';
import TaskItem from './TaskItems';


// Renders the list of tasks, each using the TaskItem component

const TaskList = ({ taskList, setTaskList, setTaskToEdit }) => {

    // for deleteing each task

  const deleteTask = (id) => {
    setTaskList((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  };

    // for toggling task status 
  const toggle = (id) => {
    setTaskList((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
    });
  };

  return (
    <div>
      {taskList.map((item, index) => (
        <TaskItem
          key={index}
          text={item.text}
          description={item.description}
          id={item.id}
          isComplete={item.isComplete}
          deleteTask={deleteTask}
          setTaskToEdit={setTaskToEdit}
          toggle={toggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
