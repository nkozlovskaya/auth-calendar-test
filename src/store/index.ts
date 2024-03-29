import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import redusers from "./redusers";

const rootreduser = combineReducers(redusers);

export const store = createStore(rootreduser, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
