import { combineReducers } from "redux";
import itemsReducer from "./items/reducer";
import favouritesReducer from "./favourite/reducer";
import modalReducer from "./modal/reducer";
import cartReducer from "./cart/reducer";


const appReducer = combineReducers({
    items: itemsReducer,
    favourites: favouritesReducer,
    modal: modalReducer,
    cart: cartReducer
})

export default appReducer;