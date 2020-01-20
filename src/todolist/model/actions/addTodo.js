import store from '../../../store/store';

export default function addTodo() {
  const { todosState } = store.getState();
  todosState.todos.push({ name: 'new todo', isDone: false });
}
