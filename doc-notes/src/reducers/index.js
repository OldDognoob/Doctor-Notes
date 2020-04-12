//reducers
import { FETCHING_NOTES, NOTES_RECIEVED, ERROR } from "../actions";

//create one reducer function per slice of state

const initialState = {
  notes: [],
  fetchingNotes: false,
  notesRecieved: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_NOTES:
      return Object.assign({}, state, {
        fetchingNotes: true,
      });
    case types.NOTES_RECIEVED:
      return Object.assign({}, state, {
        fetchingNotes: false,
        notesRecieved: false,
        notes: action.payload,
      });
    case types.ERROR:
      return Object.assign({}, state, {
        fetchingNotes: false,
        notesRecieved: false,
        error: action.payload,
      });
    default:
      return state;
  }
};
