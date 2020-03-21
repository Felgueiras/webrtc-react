import { SET_ID } from "../actionTypes";

const initialState = {
  myId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ID: {
      const { id } = action.payload;
      debugger;
      return {
        ...state,
        myId: id
      };
    }
    default:
      return state;
  }
}
