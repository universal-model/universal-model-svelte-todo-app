import { Todo } from '@/todolist/model/state/initialTodoListState';
import store from '@/store/store';

export default function removeTodo(todoToRemove: Todo): void {
  const { todosState } = store.getState();
  todosState.todos = todosState.todos.filter((todo: Todo) => todo !== todoToRemove);
}
