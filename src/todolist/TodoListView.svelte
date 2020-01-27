<script>
  import { onDestroy, onMount } from 'svelte';
  import store from '@/store/store';
  import fetchTodos from '@/todolist/model/actions/fetchTodos';
  import todoListController from '@/todolist/controller/todoListController';
  import toggleShouldShowOnlyUnDoneTodos from '@/todolist/model/actions/toggleShouldShowOnlyUnDoneTodos';
  import toggleIsDoneTodo from '@/todolist/model/actions/toggleIsDoneTodo';
  import removeTodo from '@/todolist/model/actions/removeTodo';

  const [todosState] = store.useState([store.getState().todosState]);
  const selectors = store.getSelectors();
  const [shownTodos, userName] = store.useSelectors([selectors.shownTodos, selectors.userName]);

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
    id="shouldShowOnlyUnDoneTodos"
    type="checkbox"
    bind:checked="{$todosState.shouldShowOnlyUnDoneTodos}"
    on:click="{toggleShouldShowOnlyUnDoneTodos}" />
  <label for="shouldShowOnlyUnDoneTodos">Show only undone todos</label>
  {#if $todosState.isFetchingTodos}
    <div>Fetching todos...</div>
  {:else if $todosState.hasTodosFetchFailure}
    <div>Failed to fetch todos</div>
  {:else}
    <ul>
      {#each $shownTodos as todo}
        <li>
          <input
            id="{todo.name}"
            type="checkbox"
            bind:checked="{todo.isDone}"
            on:click="{() => toggleIsDoneTodo(todo)}" />
          <label for="{todo.name}">{$userName}: {todo.name}</label>
          <button on:click="{() => removeTodo(todo)}">Remove</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
