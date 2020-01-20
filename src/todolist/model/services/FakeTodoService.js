import Constants from '../../../Constants';

export default class FakeTodoService {
  fetchTodos() {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            { name: 'first todo', isDone: true },
            { name: 'second todo', isDone: false }
          ]),
        Constants.FAKE_SERVICE_LATENCY_IN_MILLIS
      );
    });
  }
}
