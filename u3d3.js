function aggiungiTask() {
  const nuovoTaskInput = document.getElementById("nuovoTaskInput");
  const nuovoTask = nuovoTaskInput.value.trim();
  const listItem = document.createElement("li");
  listItem.textContent = nuovoTask;
  listItem.classList.add("task-list-item");
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completato");
  });
  document.getElementById("taskListContainer").appendChild(listItem);
  nuovoTaskInput.value = "";
}
