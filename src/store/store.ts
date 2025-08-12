import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '@/src/service/query/rtkQuery';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiErrorMiddleware } from '@/src/store/apiErrorMiddleware';

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      [movieApi.reducerPath]: movieApi.reducer, // Add the reducer here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        movieApi.middleware,
        apiErrorMiddleware,
        logger,
      ]),
    devTools: true,
  });
  setupListeners(store.dispatch);
  return store;
};

export default configureAppStore;
