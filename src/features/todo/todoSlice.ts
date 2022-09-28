import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../interfaces';

const initialState = [] as ITask[];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.taskName === action.payload);
      state.splice(index, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer