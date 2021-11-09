import { ADD_CART } from "./types";
import { CLEAR_CART } from "./types";
import { DELETH_ITEM_CART } from "./types";

export const addCart=(data)=>({
    type: ADD_CART,
    data: data
})

export const clearCart=()=>({
    type: CLEAR_CART,
})

export const delethItemCart=(data)=>({
    type: DELETH_ITEM_CART,
    data: data
})