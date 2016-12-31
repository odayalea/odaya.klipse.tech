/**
 * Created by eliebuff on 10/26/16.
 */

import {combineReducers} from 'redux';

import riddles from './contentReducer';
import userState from './userStateReducer';

export default combineReducers({
    riddles,
    userState,
});
