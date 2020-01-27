const createHeaderStateSelectors = () => ({
  userName: (state) => state.headerState.userName
});

export default createHeaderStateSelectors;
