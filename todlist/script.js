let main = document.createElement('main');
document.body.prepend(main);

let projectName = document.createElement('h1');
projectName.innerHTML = "Let's do it";
main.append(projectName);

let listBlock = document.createElement('div');
listBlock.className = 'mainBlock';
main.append(listBlock);

let firstDiv = document.createElement('div');
listBlock.append(firstDiv);

let texIn = document.createElement('input');
texIn.className = 'texin';
texIn.setAttribute('placeholder', 'Gonna do...');
firstDiv.append(texIn);

let setDate = document.createElement('input');
setDate.setAttribute('type', 'date');
firstDiv.append(setDate);

let addBtn = document.createElement('button');
addBtn.innerHTML = 'ADD';
addBtn.id = 'AddBtn';
firstDiv.append(addBtn);

let list = document.createElement('ul');
listBlock.append(list);

let todosArray = [
    { id: 1, text: 'уй тапшырма аткаруу', date: '14.09.06', checked: true },
    { id: 2, text: 'уй жыйноо', date: '14.09.06', checked: true },
    { id: 3, text: 'китеп окуу', date: '14.09.06', checked: false }
];

const renderTodoItem = () => {
    list.innerHTML = ''; // Очищаем список перед повторной отрисовкой

    todosArray.forEach((item, id) => {
        let li = document.createElement('li');
        li.className = 'textItem';
        if (item.checked) li.classList.add('done'); // Добавляем класс, если выполнено

        let label = document.createElement('label');
        label.textContent = ${item.text} (${item.date});

        let donBtn = document.createElement('img');
        donBtn.src = "check.webp";
        donBtn.className = "btn";
        donBtn.addEventListener('click', () => completeTodo(id));

        let deleteBtn = document.createElement('img');
        deleteBtn.src = "delete.png";
        deleteBtn.className = "btn1";
        deleteBtn.addEventListener('click', () => deleteTodo(id));

        li.append(label);
        li.append(donBtn);
        li.append(deleteBtn);

        list.append(li);
    });
};

const addTodo = () => {
    let newTask = texIn.value.trim();
    let date = setDate.value;

    if (newTask !== '' && date !== '') {
        todosArray.push({ id: todosArray.length + 1, text: newTask, date: date, checked: false });
        texIn.value = '';
        setDate.value = '';
        renderTodoItem();
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
};

const completeTodo = (id) => {
    todosArray[id].checked = !todosArray[id].checked;
    renderTodoItem();
};

const deleteTodo = (id) => {
    todosArray.splice(id, 1);
    renderTodoItem();
};

// Обработчик для кнопки "ADD"
addBtn.addEventListener('click', addTodo);

// Первоначальная отрисовка списка
renderTodoItem();