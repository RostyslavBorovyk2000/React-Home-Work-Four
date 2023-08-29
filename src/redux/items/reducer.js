import { GET_ITEMS, SET_ACTIVE_ITEM } from "./actions";

const initialValue = {
    items: [],
    activeItem: {
        itemName: '',
        id: ''
    },
}

const itemsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_ITEMS: {
            return { ...state, items: action.payload }
        }
        case SET_ACTIVE_ITEM: {
            return { ...state, activeItem: action.payload }
        }
        default: return state
    }
}

export default itemsReducer;