import { combineSelectors, createStore, createSubState } from 'universal-model-svelte';
import initialHeaderState from '../header/model/state/initialHeaderState';
import initialTodoListState from '../todolist/model/state/initialTodoListState';
import createTodoListStateSelectors from '../todolist/model/state/createTodoListStateSelectors';
import createHeaderStateSelectors from '@/header/model/state/createHeaderStateSelectors.js';

const initialState = {
  headerState: createSubState(initialHeaderState),
  todosState: createSubState(initialTodoListState)
};

const selectors = combineSelectors(createTodoListStateSelectors(), createHeaderStateSelectors());

export default createStore(initialState, selectors);
