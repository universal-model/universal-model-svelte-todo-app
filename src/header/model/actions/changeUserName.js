import store from '@/store/store';

export default function changeUserName(newUserName) {
  const { headerState } = store.getState();
  headerState.userName = newUserName;
}
