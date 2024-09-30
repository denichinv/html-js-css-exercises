//store tasks
let tasks = [];

// Func to add new task
function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  if (taskInput) {
    tasks.push(taskInput);
    taskInput.value = ""; //clear input field
    displayTasks();
  } else {
    alert("Please enter a task."); //alert if field is empty
  }
}
// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeTask(index);
    li.appendChild(removeButton);
    taskList.appendChild(li);
  });
}
// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
