// src/states/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sellersProfileReducer from "./sellersProfileSlice";
import experienceReducer from "./sellerExprienceSlice";
import storage from "redux-persist/lib/storage"; // localStorage
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  sellersProfileReducer,
  experienceReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
