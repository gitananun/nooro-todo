import { ITask } from '@interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  items: ITask[];
}

const INITIAL_STATE: IState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    set: (state, actions: PayloadAction<ITask[]>) => {
      state.items = actions.payload;
    },
    add: (state, action: PayloadAction<ITask>) => {
      state.items.push(action.payload);
    },
    update: (state, action: PayloadAction<ITask>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    destroy: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { set, add, destroy, update } = tasksSlice.actions;
export default tasksSlice.reducer;
