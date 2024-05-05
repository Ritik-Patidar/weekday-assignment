import { configureStore } from "@reduxjs/toolkit";
import { job } from "./services/job";
import JobReducer from "./reducers/jobReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      jobReducer: JobReducer,
      [job.reducerPath]: job.reducer,
    },
    middleware: (middleware) => middleware().concat(job.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
