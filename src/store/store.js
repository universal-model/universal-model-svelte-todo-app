import { createStore } from 'universal-model-svelte';
import initialHeaderState from '../header/model/state/initialHeaderState';
import initialTodoListState from '../todolist/model/state/initialTodoListState';
import createTodoListStateSelectors from '../todolist/model/state/createTodoListStateSelectors';

const initialState = {
  headerState: initialHeaderState,
  todosState: initialTodoListState
};

const selectors = {
  ...createTodoListStateSelectors()
};

export default createStore(initialState, selectors);
