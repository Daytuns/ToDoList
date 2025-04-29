const tasks_container = document.getElementById('tasks');
const submit = document.getElementById('submit');
const task = document.getElementById('task');


submit.addEventListener('click', (event) => {
    event.preventDefault();

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const del_button = document.createElement('button');

    checkbox.type = 'checkbox';
    del_button.textContent = 'Delete';

    li.textContent = task.value + ' ';
    li.append(checkbox);
    li.append(del_button);
    tasks_container.appendChild(li);

});


