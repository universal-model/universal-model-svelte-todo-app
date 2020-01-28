const createHeaderStateSelectors = () => ({
  userName: (state) => state.headerState.userName,
  headerText: (state) => {
    const unDoneTodoCount = state.todosState.todos.filter((todo) => !todo.isDone).length;
    const todoCount = state.todosState.todos.length;
    return `${state.headerState.userName} (${unDoneTodoCount}/${todoCount})`;
  }
});

export default createHeaderStateSelectors;
