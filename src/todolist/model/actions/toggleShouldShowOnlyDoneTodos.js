import store from '../../../store/store';

export default function toggleShouldShowOnlyDoneTodos() {
  const { todosState } = store.getState();
  todosState.shouldShowOnlyDoneTodos = !todosState.shouldShowOnlyDoneTodos;
}
