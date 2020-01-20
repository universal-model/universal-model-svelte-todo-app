import store from '../../../store/store';

export default function removeAllTodos() {
  const { todosState } = store.getState();
  todosState.todos = [];
}
