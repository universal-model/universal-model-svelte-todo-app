const createTodoListStateSelectors = () => ({
  shownTodos: (state) =>
    state.todosState.todos.filter(
      (todo) =>
        (state.todosState.shouldShowOnlyUnDoneTodos && !todo.isDone) ||
        !state.todosState.shouldShowOnlyUnDoneTodos
    ),
  todoCount: (state) => state.todosState.todos.length,
  unDoneTodoCount: (state) => state.todosState.todos.filter((todo) => !todo.isDone).length
});

export default createTodoListStateSelectors;
