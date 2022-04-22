import {createStore, applyMiddleware} from "redux";
import {combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import formReducer from "./form-reducer.ts";

const rootReducer = combineReducers({
    formData: formReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))