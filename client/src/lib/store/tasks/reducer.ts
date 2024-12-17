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
  },
});

export const { set, add } = tasksSlice.actions;
export default tasksSlice.reducer;
