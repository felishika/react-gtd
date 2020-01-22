import { AnyAction } from "redux";
import { ActionTypes } from "../core/action-types";

export interface IAddTodoAction extends AnyAction {
  text: string;
}

export interface IRemoveTodoAction extends AnyAction {
  id: string;
}

export interface IToggleTodoAction extends AnyAction {
  id: string;
}

export type TodoAction = IAddTodoAction | IRemoveTodoAction | IToggleTodoAction;

export const addTodo = (text: string): IAddTodoAction => ({ type: ActionTypes.ADD_TODO, text });
export const removeTodo = (id: string): IRemoveTodoAction => ({
  type: ActionTypes.REMOVE_TODO,
  id,
});
export const toggleTodo = (id: string): IToggleTodoAction => ({
  type: ActionTypes.TOGGLE_COMPLETED,
  id,
});
