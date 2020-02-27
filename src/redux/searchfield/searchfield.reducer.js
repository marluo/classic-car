import { CHANGE_SEARCH_FIELD } from './searchfield.types';

const INITIAL_STATE = {
    searchField: ''
}

const searchfieldReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
}

export default searchfieldReducer;