import { ADD_ITEM } from "../actions/types";

const initialState = {
  data: [{
    id:"1",
    img:"1",
    name:"1",
    price:0,
    platform:"1",
    region:"1",
    }],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: action.data,
      };
    default: {
      return state;
    }
  }
};

export default itemReducer;