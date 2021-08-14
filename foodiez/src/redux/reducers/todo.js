import {Action} from '../actions/types';
import {CREATE_TASK, DELETE_TASK} from '../actions/todoAction';
// import DATA from '../../components/Data';

export type Task = {
  label: string,
  selected: boolean,
};

export type Category = {
  id: string,
  title: string,
  taskList: Array<Task>,
};

export type Todo = {
  todos: Array<Category>,
};

const initialState: Todo = {
  todos: [],
};

export default function (state: Todo = initialState, action: Action): Todo {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        todos: action.todoList,
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: action.todoList,
      };
  }

  return state;
}
