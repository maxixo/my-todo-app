To-Do App

Description

The To-Do App is a simple task management application built using React. It allows users to add, edit, delete, and mark tasks as completed. The tasks are persisted in browser storage (localStorage), ensuring that they are retained between sessions. The app demonstrates various aspects of state management in React, as well as form validation and UI styling.


Features

Add Tasks: Users can add new tasks with a name and description.
Edit Tasks: Users can edit the details of existing tasks.
Delete Tasks: Users can delete tasks from the list. A confirmation prompt is shown before deletion.
Mark as Completed: Users can mark tasks as completed or uncompleted. Completed tasks are visually distinguished from active tasks.
Persist Tasks: Tasks are stored in the browser's localStorage, so they persist between sessions
Validate Form : Validate the form before adding tasks.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/maxixo/my-todoapp.git
Navigate to the project directory:

bash
Copy code
cd my-todoapp
Install the dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm run dev
The application will run on http://localhost:3000.

Usage
Add a Task: Use the input fields to enter a task name and description, then click the "ADD +" button.
Edit a Task: Click the edit icon next to the task you want to edit. Modify the task details in the form that appears.
Delete a Task: Click the delete icon next to the task you want to remove. A confirmation prompt will appear; click "OK" to confirm deletion.
Mark as Completed: Click on the task text to toggle its completion status.
Project Structure
