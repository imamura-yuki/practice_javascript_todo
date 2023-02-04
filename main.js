(() => {
  const todos = [];

  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const listCoitainer = document.getElementById('todo-list');

  addButton.addEventListener('click', (event) => {
    const todo = inputBox.value;
    inputBox.value = '';

    if (todo) {
      todos.push(todo);
      showTodos();
    }
  });

  const showTodos = () => {
    while(listCoitainer.firstChild) {
      listCoitainer.removeChild(listCoitainer.firstChild);
    }

    todos.forEach((todo, index) => {
      const todoItem = document.createElement('li');
      const taskNumber = index + 1;

      todoItem.textContent = `${taskNumber} : ${todo}`;
      listCoitainer.appendChild(todoItem);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      todoItem.appendChild(deleteButton);

      deleteButton.addEventListener('click', (event) => {
        deleteTodo(index);
      });
    });
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    showTodos();
  };
})();