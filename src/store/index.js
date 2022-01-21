import { createStore, combineReducers } from "redux";
import * as  reducers  from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(reducers);

const configureStore=()=>{
    
    const store = createStore(rootReducer, composeWithDevTools());
    return store;

}



export default configureStore;