const createTodoListStateSelectors = () => ({
  shownTodos: (state) =>
    state.todosState.todos.filter(
      (todo) =>
        (state.todosState.shouldShowOnlyDoneTodos && todo.isDone) || !state.todosState.shouldShowOnlyDoneTodos
    )
});

export default createTodoListStateSelectors;
