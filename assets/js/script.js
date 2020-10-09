var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var taskFormHandler = function (event) {
  event.preventDefault();


  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
// send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
}

var createTaskEl = function (taskDataObj) {

  

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  //listItemEl.textContent = taskNameInput; question
  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list Item to the list
  tasksToDoEl.appendChild(listItemEl);

  
}
formEl.addEventListener("submit", taskFormHandler);

/* //                                    Just in Case                              

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  //listItemEl.textContent = taskNameInput; question
  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list Item to the list
  tasksToDoEl.appendChild(listItemEl); */