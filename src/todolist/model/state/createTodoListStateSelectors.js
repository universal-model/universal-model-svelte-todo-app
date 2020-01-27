const createTodoListStateSelectors = () => ({
  shownTodos: (state) =>
    state.todosState.todos.filter(
      (todo) =>
        (state.todosState.shouldShowOnlyUnDoneTodos && !todo.isDone) ||
        !state.todosState.shouldShowOnlyUnDoneTodos
    )
});

export default createTodoListStateSelectors;
