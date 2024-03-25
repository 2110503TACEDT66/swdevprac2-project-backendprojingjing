import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import reserveSlice from "./features/reserveSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key: "rootPersist",
    storage
}

const rootReducer = combineReducers({reserveSlice})
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer)

export const store= configureStore({
    reducer:reduxPersistedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;