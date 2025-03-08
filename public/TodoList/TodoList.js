// script.js

// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Check if the input is empty
  if (taskText === '') {
    alert("Please enter a task.");
    return;
  }

  // Create list item for the task
  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  // Add the task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = 'Remove';
  deleteBtn.className = 'delete-btn';

  // Delete task when delete button is clicked
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });

  // Add task text and delete button to the list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = '';
}

// Add event listener to the add button
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing 'Enter' key
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
