import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { movieApi } from '@/src/service/query/rtkQuery';
import { apiErrorMiddleware } from '@/src/store/apiErrorMiddleware';

const logger: Middleware = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

// Object containing the individual "slice reducers"
const rootReducer = {
  [movieApi.reducerPath]: movieApi.reducer,
};

// Step 1: Set Up the Redux Store ///////////////////////////////
const configureAppStore = () => {
  // only one store instance for the entire application
  const store = configureStore({
    // Pass in the single root reducer
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        movieApi.middleware,
        apiErrorMiddleware,
        logger,
      ]),
    devTools: true,
  });

  return store;
};

const store = configureAppStore();

// Step 2: Add TypeScript Helpers ///////////////////////////////

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`

// Dispatch Actions ("Trigger Events")
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Select State ("Read State")
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
