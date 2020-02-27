import { CHANGE_SEARCH_FIELD } from "./searchfield.types";

export const setSearchField = text => {
    console.log(text);
    return {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    }
};