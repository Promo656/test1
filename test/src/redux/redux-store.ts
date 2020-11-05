import {authReducer} from "./authReducer";
import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer
})

export const store=createStore(reducers)

//export type StoreType= ReturnType<typeof reducers>