import { ActionTypes } from "../core/action-types";

export const addToDo = (text: string) => ({ type: ActionTypes.ADD_TODO, text });
export const removeToDo = (id: string) => ({ type: ActionTypes.REMOVE_TODO, id });
