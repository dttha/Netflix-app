
import userReducer from './user'
import { combineReducers } from 'redux';
import filmReducer from './film';

const rootReducer = combineReducers({
    film: filmReducer,
    user: userReducer
})

export default rootReducer