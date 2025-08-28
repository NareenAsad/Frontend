import { create } from "zustand";

interface CounterState {
  count: number;
  todos: TODO[];
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  addTodo: (newTodo: TODO) => void;
  removeTodo: (id: number) => void;
}

interface TODO {
  id: number;
  title: string;
  description: string;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  // Initial values for states
  count: 0,
  todos: [],

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  reset: () => set({ count: 0 }),

  addTodo: (newTodo: TODO) => 
    set((state) => ({
      todos: [...state.todos, newTodo],
    })),

  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id),
    })),
}));