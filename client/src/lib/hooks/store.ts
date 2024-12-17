import type { AppDispatch, RootState } from '@store/index';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// useAppDispatch should be used to dispatch actions in the components
export const useAppDispatch: () => AppDispatch = useDispatch;

// useAppSelector should be used to select data from the store in the components
// const selectedData = useAppSelector(state => state.someSlice.someData);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
