import Constants from '@/Constants';

export default class FakeTodoService {
  tryFetchTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.95) {
          resolve([
            {  name: 'first todo', isDone: true },
            {  name: 'second todo', isDone: false }
          ]);
        } else {
          reject();
        }
      }, Constants.FAKE_SERVICE_LATENCY_IN_MILLIS);
    });
  }
}
