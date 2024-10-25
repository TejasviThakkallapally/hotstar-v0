import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/todo/todoSlice';
import descReducer from '../src/features/todo/descriptionSlice'

export default configureStore({
    reducer: {
      auths: authReducer,
      descs: descReducer,
    },
  });