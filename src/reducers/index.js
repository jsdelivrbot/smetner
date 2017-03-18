import { combineReducers } from 'redux';
import ListReducer from './reducer_list';

const rootReducer = combineReducers({
    lists: ListReducer,
});

export default rootReducer;