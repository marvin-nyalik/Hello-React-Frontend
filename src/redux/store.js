import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';

const store = configureStore({
  reducer: {
    greetingStore: greetingReducer,
  },
});

export default store;
