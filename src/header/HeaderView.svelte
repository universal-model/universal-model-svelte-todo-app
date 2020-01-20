<script>
  import changeUserName from './model/actions/changeUserName';
  import store from '../store/store';

  const state = store.getState();
  const [headerState] = store.useState([state.headerState]);
  console.log('jee');
</script>

<div>
  <h1>{$headerState.userName}</h1>
  <label for="userName">User name:</label>
  <input id="userName" on:change="{(e) => changeUserName(e.target.value)}" />
</div>



