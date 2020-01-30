const createHeaderStateSelectors = () => ({
  userName: (state) => state.headerState.userName,
  headerText: (state) => {
    const {
      todoCount: selectTodoCount,
      unDoneTodoCount: selectUnDoneTodoCount
    } = createTodoListStateSelectors();

    return `${state.headerState.userName} (${selectUnDoneTodoCount(state)}/${selectTodoCount(state)})`;
  }
});

export default createHeaderStateSelectors;
