import store from '@/store/store';

export default function removeTodo(todoToRemove) {
  const { todosState } = store.getState();
  todosState.todos = todosState.todos.filter(todo => todo !== todoToRemove);
}
