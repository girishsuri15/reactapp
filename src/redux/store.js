import {  createStore ,applyMiddleware} from 'redux';
import reducer from './Reducer/reducer';
import thunk from 'redux-thunk';
export default function initStore() {

  const store = createStore(reducer, applyMiddleware(thunk))
  return store
}