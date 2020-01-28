<script>
  import changeUserName from '@/header/model/actions/changeUserName';
  import store from '@/store/store';

  const [headerText] = store.useSelectors([store.getSelectors().headerText]);
</script>

<div>
  <h1>{$headerText}</h1>
  <label for="userName">User name:</label>
  <input id="userName" on:change="{(e) => changeUserName(e.target.value)}" />
</div>
