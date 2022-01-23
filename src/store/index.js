import { createStore, combineReducers, applyMiddleware } from "redux";
import * as  reducers  from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as auth from "../components/auth/service";
import * as adverts from "../components/anuncios/service";
import {connectRouter, routerMiddleware} from 'connected-react-router'
import { connect } from "react-redux";

const api = { auth, adverts };

const rootReducer = combineReducers(reducers);

const logger = store => next => action => {
    console.log('****dispatching action****', action)
    next(action);
    console.log('****new state***', store.getState());
};

// function thunk(store) {
//     return function (next){
//         return function(action){
//             if (typeof action === 'function') {
//                return action(store.dispatch, store.getState);
//         }return next(action)
//         }
//     }
// }


const configureStore = (preloadedState, {history}) => {
    const middlewares = [routerMiddleware(history), thunk.withExtraArgument({api, history}), logger]
    
    const store = createStore(
        combineReducers({...reducers, router: connectRouter(history)}),
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );
    return store;
};



export default configureStore;