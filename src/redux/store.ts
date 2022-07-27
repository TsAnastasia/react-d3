import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";

// import storage from "redux-persist/lib/storage";

import { exampleSlice } from "./example/exampleSlice";

// import { usersAPI } from "../allData/API/users/usersAPI";

const rootReducer = combineReducers({
  [exampleSlice.name]: exampleSlice.reducer,
  //   [usersAPI.reducerPath]: usersAPI.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [exampleSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupstore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
      // .concat(usersAPI.middleware);
    },
  });
};

export const store = setupstore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupstore>;
export type AppDispatch = AppStore["dispatch"];
