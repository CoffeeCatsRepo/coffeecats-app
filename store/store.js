import { configureStore } from '@reduxjs/toolkit';

import operationReducer from './operationSlice';
import recentReducer from './recentSlice';
import socialReducer from './socialSlice';

export const store = configureStore({
  reducer: {
    operationCafe: operationReducer,
    recentCafe: recentReducer,
    social: socialReducer,
  },
});
