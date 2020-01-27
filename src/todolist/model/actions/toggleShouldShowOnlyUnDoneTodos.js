import store from '@/store/store';

export default function toggleShouldShowOnlyUnDoneTodos() {
  const { todosState } = store.getState();
  todosState.shouldShowOnlyUnDoneTodos = !todosState.shouldShowOnlyUnDoneTodos;
}
