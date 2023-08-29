import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES, SET_FAVOURITES } from "./actions";
import { ITEMS_KEY } from "../../assets/constants/keys";

export const setFavourites = (items) => ({ type: SET_FAVOURITES, payload: items });
export const addToFavourites = (item) => ({ type: ADD_TO_FAVOURITES, payload: item });
export const deleteFromFavourites = (item) => ({ type: DELETE_FROM_FAVOURITES, payload: item });

export const getFavouriteFromLocalStorage = () => {
    return async (dispatch) => {
        const items = JSON.parse(localStorage.getItem(ITEMS_KEY))
        const favourites = items.filter(item => item.isFavourite)
        dispatch(setFavourites(favourites))
    }
}