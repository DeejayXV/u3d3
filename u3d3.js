// function addTask() {
//   const task = document.createElement("div");
//   task.classList.add("task");

//   const toDo = document.createElement("p");
//   toDo.innerText = "to-do list";

//   task.appendChild(toDo);

//   document.body.appendChild(task);
// }
function aggiungiTask() {
  const nuovoTask = document.getElementById("nuovoTaskInput").value;
  const listItem = document.createElement("p");
  listItem.innerText = nuovoTask;
  listItem.classList.add("taskListItem");
  document.getElementById("taskListContainer").appendChild(listItem);
  document.getElementById("nuovoTaskInput").value = " ";
}
