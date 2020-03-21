import { SET_ID } from "./actionTypes";

export const setID = id => ({
  type: SET_ID,
  payload: {
    id
  }
});
