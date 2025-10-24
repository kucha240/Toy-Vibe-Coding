import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', title: '샘플 투두 1', done: false },
    { id: '2', title: '샘플 투두 2', done: true },
  ],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(title) {
        return { payload: { id: nanoid(), title, done: false } };
      },
    },
    toggleTodo(state, action) {
      const t = state.items.find((x) => x.id === action.payload);
      if (t) t.done = !t.done;
    },
  },
});

export const { addTodo, toggleTodo } = slice.actions;
export default slice.reducer;