import addTodo from '../model/actions/addTodo';
import removeAllTodos from '../model/actions/removeAllTodos';

export default {
  handleKeyPress(keyboardEvent) {
    if (keyboardEvent.code === 'KeyA') {
      addTodo();
    } else if (keyboardEvent.code === 'KeyR') {
      removeAllTodos();
    }
  }
};
