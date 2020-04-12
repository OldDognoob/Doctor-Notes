//Design the type of actions the state may suffer
import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const NOTES_RETRIEVED = "NOTES_RETRIEVED";
export const ERROR = "ERROR";

export const getNotes = () => {
  return function (dispatch) {
    dispatch({ type: FETCHING_NOTES });
    axios
      .get("https://doc-notes.herokuapp.com/note/get/all")
      .then((res) => {
        dispatch({ type: NOTES_RETRIEVED, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
