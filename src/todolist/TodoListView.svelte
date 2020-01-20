<script>
  import { onDestroy, onMount } from 'svelte';
  import store from '../store/store';
  import fetchTodos from './model/actions/fetchTodos';
  import todoListController from './controller/todoListController';
  import toggleShouldShowOnlyDoneTodos from './model/actions/toggleShouldShowOnlyDoneTodos';
  import toggleIsDoneTodo from './model/actions/toggleIsDoneTodo';
  import removeTodo from './model/actions/removeTodo';

  const state = store.getState();
  const selectors = store.getSelectors();
  const [todosState] = store.useState([state.todosState]);
  const [shownTodos] = store.useSelectors([selectors.shownTodos]);

  onMount(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchTodos();
    document.addEventListener('keypress', todoListController.handleKeyPress);
  });

  onDestroy(() => {
    document.removeEventListener('keypress', todoListController.handleKeyPress);
  });
</script>

<div>
  <input
    id="shouldShowOnlyDoneTodos"
    type="checkbox"
    bind:checked="{$todosState.shouldShowOnlyDoneTodos}"
    on:click="{toggleShouldShowOnlyDoneTodos}" />
  <label for="shouldShowOnlyDoneTodos">Show only done todos</label>
  <ul>
    {#each $shownTodos as todo}
      <li>
        <input
          id="{todo.name}"
          type="checkbox"
          bind:checked="{todo.isDone}"
          on:click="{() => toggleIsDoneTodo(todo)}" />
        <label for="{todo.name}">{todo.name}</label>
        <button on:click="{() => removeTodo(todo)}">Remove</button>
      </li>
    {/each}
  </ul>
</div>
