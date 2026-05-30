let newTask;

function btnAdd() {

  getNewTask();
  newUserTask();

} 

function getNewTask() {

  //selecionando o input new-task
  newTask = document.getElementById("new-task");

  alert(newTask.value);

}

function newUserTask() {

  //selecionando a div new-task-field
  const newTasksField = document.querySelector(".new-tasks-field");
  
  const newTaskGroup = document.querySelector(".new-tasks-group");

  //criando o li para mostrar as novas tarefas, indicando como filho do ul e inserindo o value de newTask como conteúdo
  const userTasks = document.createElement('li');
  newTaskGroup.appendChild(userTasks);
  userTasks.textContent = newTask.value;
  userTasks.id = "task";
  
  const btnRemove = document.createElement('button');
  newTaskGroup.appendChild(btnRemove);
  btnRemove.id = "btn-remove";
  const btnRemoveStyle = document.createElement('span');
  btnRemove.appendChild(btnRemoveStyle);
  btnRemoveStyle.className = "material-symbols-outlined"
  btnRemoveStyle.textContent = "delete"
}