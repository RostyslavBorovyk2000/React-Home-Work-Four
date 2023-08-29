import { ADD_TO_CART, DELETE_FROM_CART, SET_CART, CHANGE_CART_COUNTER } from "./actions";
import { ITEMS_KEY } from "../../assets/constants/keys";

export const setCart = (items) => ({ type: SET_CART, payload: items });
export const addToCart = (item) => ({ type: ADD_TO_CART, payload: item });
export const deleteFromCart = (item) => ({ type: DELETE_FROM_CART, payload: item });
export const changeCartCounter = () => ({ type: CHANGE_CART_COUNTER })

export const getItemsForCounterFromLocalStorage = () => {
    return async (dispatch) => {
        const items = JSON.parse(localStorage.getItem(ITEMS_KEY))
        const cart = items.filter(item => item.count > 0)
        dispatch(setCart(cart))
        dispatch(changeCartCounter())
    }
}