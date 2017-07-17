import { createElement } from './helpers';

class View {
  constructor() {
    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.list = document.getElementById('todo-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  createElement(todo) {
    const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : '' });
    const label = createElement('label', { className: 'title' }, todo.title);
    const editInput = createElement('input', { type: 'text', className: 'textfield' });
    const editButton = createElement('button', { className: 'edit' }, 'Change');
    const removeButton = createElement('button', { className: 'remove' }, 'Delete');
    const item = createElement('li', { className: `todo-item${todo.completed ? ' completed' : ''}`, 'data-id': todo.id }, checkbox, label, editInput, editButton, removeButton);

    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const checkbox = listItem.querySelector('.checkbox');
    const editButton = listItem.querySelector('button.edit');
    const removeButton = listItem.querySelector('button.remove');

    checkbox.addEventListener('change', this.handleToggle.bind(this));
    editButton.addEventListener('click', handleEdit.bind(this));
    removeButton.addEventListener('click', handleRemove.bind(this));

    return item;
  }

  handleAdd(event) {
    event.preventDefault();

    if (!this.input.value) return alert('You should add your task');

    const value = this.input.value;

    // add item to model
  }

  handleToggle(event) {
    const listItem = event.target.parentNode();
    const id = listItem.getAttribute('data-id');
    const completed = event.target.completed;

    // update model
  }

  handleEdit(event) {
    const listItem = event.target.parentNode;
    const id = listItem.getAttribute('data-id');
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('textfield');
    const editButton = listItem.querySelector('button.edit');
    const title = input.value;
    const isEditing = listItem.className.contains('editing');

    if (isEditing) {
      // update model
    } else {
      input.value = label.textContent;
      editButton.textContent = 'Save';
      listItem.classList.add('editing');
    }
  }

  handleRemove(event) {
    const listItem = event.target.parentNode;

    // remove item from model
  }

  findListItem(id) {
    return this.list.querySelector(`[data-id="${id}"]`);
  }

  addItem(todo) {
    const listItem = this.createElement(todo);

    this.input.value = '';
    this.list.appendChild(listItem);
  }

  toggleItem(todo) {
    const listItem = this.findListItem(todo.id);
    const checkbox = listItem.querySelector('.checkbox');

    checkbox.checked = todo.completed;

    if (todo.completed) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  }

  editItem(todo) {
    const listItem = this.findListItem(todo.id);
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('textfield');
    const editButton = listItem.querySelector('button.edit');

    label.textContent = todo.title;
    editButton.textContent = 'Change';
    listItem.classList.remove('editing');
  }

  removeItemd(id) {
    const listItem = this.findListItem(todo.id);

    this.list.removeChild(listItem);
  }
}

export default View;
