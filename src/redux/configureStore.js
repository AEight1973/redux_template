import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../containers/Counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
