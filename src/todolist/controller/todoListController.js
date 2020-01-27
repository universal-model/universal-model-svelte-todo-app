import addTodo from '@/todolist/model/actions/addTodo';
import removeAllTodos from '@/todolist/model/actions/removeAllTodos';

export default {
  handleKeyPress(keyboardEvent) {
    if (keyboardEvent.code === 'KeyA' && keyboardEvent.ctrlKey) {
      addTodo();
    } else if (keyboardEvent.code === 'KeyR' && keyboardEvent.ctrlKey) {
      removeAllTodos();
    }
  }
};
