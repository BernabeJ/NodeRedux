import { createStore, combineReducers, applyMiddleware } from "redux";
import * as  reducers  from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as auth from "../components/auth/service";
import * as adverts from "../components/auth/service";

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


const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument({api}), logger)),
    );
    return store;
};



export default configureStore;