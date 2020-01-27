<script>
  import changeUserName from '@/header/model/actions/changeUserName';
  import store from '@/store/store';

  const [headerState] = store.useState([store.getState().headerState]);
</script>

<div>
  <h1>{$headerState.userName}</h1>
  <label for="userName">User name:</label>
  <input id="userName" on:change="{(e) => changeUserName(e.target.value)}" />
</div>



