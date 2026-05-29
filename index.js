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

  //criando a div que vai acoplar as novas tarefas e indicando como filho da new-tasks-field
  const newField = document.createElement('div');
  newField.appendChild(newTasksField);

  //criando a ul para agrupar as novas tarefas e indicando como filho da div criada anteriormente
  const newFieldUl = document.createElement('ul');
  newFieldUl.appendChild(newField);

  //criando o li para mostrar as novas tarefas, indicando como filho do ul e inserindo o value de newTask como conteúdo
  const userTasks = document.createElement('li');
  userTasks.appendChild(newFieldUl);
  userTasks.textContent = newTask.value;
  
}