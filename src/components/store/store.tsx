import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducer  from '../reducers'
import rootSaga from '../middlewares'

// const rootReducer = combineReducers(reducer)    

const sagaMiddleware = createSagaMiddleware()

// const configureStore = () => {
//     return createStore(
//         reducer,
//         applyMiddleware(sagaMiddleware)
//     );
// }
// sagaMiddleware.run(rootSaga);


const createAppStore = (): any => {

    const Store = createStore(
      reducer,
      applyMiddleware(sagaMiddleware)
    );
   sagaMiddleware.run(rootSaga);
    return Store;
}


export default createAppStore