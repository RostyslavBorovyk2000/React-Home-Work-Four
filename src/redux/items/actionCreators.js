import { GET_ITEMS, SET_ACTIVE_ITEM } from './actions'
import axios from "axios";
import { ITEMS_KEY } from '../../assets/constants/keys';

export const getItems = (value) => ({ type: GET_ITEMS, payload: value });
export const setActiveItem = (itemInfo) => ({ type: SET_ACTIVE_ITEM, payload: itemInfo });

export const getItemsAsyncFromAxios = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("./games.json");
            const newItems = [...data].map(item => {
                item.count = 0;
                item.isFavourite = false;
                return item
            })
            if (!localStorage.getItem(ITEMS_KEY)) {
                localStorage.setItem(ITEMS_KEY, JSON.stringify(newItems))
            }
            dispatch(getItems(newItems))
        } catch (err) {
            console.warn(err)
        }
    }
}