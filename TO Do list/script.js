document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    const categorySelect = document.getElementById('category-select');
    const category = categorySelect.value;

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        const textNode = document.createTextNode(todoText);
        listItem.appendChild(textNode);

        const categorySpan = document.createElement('span');
        categorySpan.className = 'todo-category';
        categorySpan.textContent = ` (${category})`;
        listItem.appendChild(categorySpan);

        const doneButton = document.createElement('button');
        doneButton.className = 'done-btn';
        doneButton.innerHTML = '<i class="fas fa-check"></i>';
        doneButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        listItem.appendChild(doneButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});
