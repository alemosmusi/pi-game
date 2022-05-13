import { createStore , applyMiddleware, compose } from 'redux';
import gameReducer from './reducer/gameReducer';
import thunk from 'redux-thunk';









const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
  gameReducer,
  composeEnhancers(applyMiddleware(thunk))
  
  )

// const store = createStore(
//   gameReducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk),
//   composeEnhancers

// )




export default store;