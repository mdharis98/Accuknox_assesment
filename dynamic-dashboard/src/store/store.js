import { createStore } from 'redux';
import widgetReducer from './reducers';

const store = createStore(widgetReducer);

export default store;
