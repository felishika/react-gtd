import { Reducer } from "redux";
import v4 from "uuid";
import { TodoAction } from "../actions/todo-actions";
import { ActionTypes } from "../core/action-types";
import { AppStateStore } from "../stores/app-state-store";
import { TodoItemStore } from "../stores/todo-item-store";

const initialState: AppStateStore = {
  TodosById: new Map(),
  Todos: [],
};

const reactGTDApp: Reducer<AppStateStore, TodoAction> = (
  state: AppStateStore = initialState,
  action: TodoAction,
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const { text } = action;
      const newItem: TodoItemStore = { text, completed: false, id: v4() };
      const newId = newItem;
      return {
        ...state,
        TodosById: { ...state.TodosById, [`${newId}`]: newItem },
        Todos: [...state.Todos, newId],
      };
    case ActionTypes.REMOVE_TODO:
      const { id } = action;
      const todoItems = { ...state.TodosById };
      todoItems.delete(id);

      return {
        ...state,
        TodosById: todoItems,
        Todos: [...state.Todos].filter((todo) => todo !== id),
      };
    case ActionTypes.TOGGLE_COMPLETED:
      const itemId = action.id;

      return {
        ...state,
        TodosById: Object.keys(state.TodosById).reduce((res, key) => {
          const currItem = state.TodosById[key];
          res.set(key, { ...currItem, completed: currItem.id === itemId });
          return res;
        }, new Map<string, TodoItemStore>()),
        Todos: [...state.Todos],
      };
    default:
      return state;
  }
};
