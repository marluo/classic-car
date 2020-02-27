import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import directoryMakerReducer from './directory/directory.reducer';
import searchfieldReducer from './searchfield/searchfield.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryMakerReducer,
    seachField: searchfieldReducer
});

export default rootReducer;