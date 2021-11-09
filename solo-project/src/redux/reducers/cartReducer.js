import { ADD_CART } from "../actions/types";
import { CLEAR_CART } from "../actions/types";
import { DELETH_ITEM_CART } from "../actions/types";

const initialState = {
  data: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let checkNew = false
      let clone = JSON.parse(JSON.stringify(action.data));

      for(let i = 0; i< state.data.length; i++){
        // console.log(i);
        if(state.data[i].id === clone.id){
          // console.log("quantity: "+state.data[i].quantity);
          state.data[i].quantity += 1
          checkNew = true
          break
        }
      }
      if(checkNew === false){
        clone.quantity = 1;
        state.data.push(clone)
      }
      return state

    case CLEAR_CART:
      console.log("Clear success!!");
      console.log(state);
      // state.data = []
      return {
        ...state,
        data: [],
      };
    
    case DELETH_ITEM_CART:
      console.log("In deleth id:"+action.data)
      let id = action.data
      for(let i = 0; i< state.data.length; i++){
        if(state.data[i].id === id){
          state.data[i].quantity -= 1
          if(state.data[i].quantity == 0){
            state.data.splice(i,1)
          }
          break
        }
      }
      return state

    default: {
      return state;
    }
  }
};

export default cartReducer;