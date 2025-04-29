const tasks_container = document.getElementById('tasks');
const submit = document.getElementById('submit');
const task = document.getElementById('task');

submit.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (task.value.trim() === '') {
      return;
    }
  
    const li = document.createElement('li');
    const label = document.createElement('label');
    label.classList.add('container');

    const input = document.createElement('input');
    input.type = 'checkbox';

    const checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');

    label.appendChild(input);
    label.appendChild(checkmark);

    const taskText = document.createElement('span');
    taskText.textContent = task.value;
    taskText.classList.add('task-text');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('task-wrapper');  
    contentWrapper.appendChild(label);
    contentWrapper.appendChild(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.id = 'deleteButton';

    deleteButton.addEventListener('click', () => {
    li.remove();
    });

    li.appendChild(contentWrapper);
    li.appendChild(deleteButton);
    tasks_container.appendChild(li);

  
    task.value = '';
    saveData();

  });

  function saveData(){
    localStorage.setItem("data", tasks_container.innerHTML);
  }

  function showTask() {
    tasks_container.innerHTML = localStorage.getItem("data");

    const deleteButtons = document.querySelectorAll('#deleteButton');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.parentElement.remove();
        saveData();  // Save updated list
      });
    });
  }

  showTask();
  

