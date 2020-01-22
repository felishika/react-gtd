import { TodoItemStore } from "./todo-item-store";

export type AppStateStore = {
  TodosById: Map<string, TodoItemStore>;
  Todos: string[];
};
