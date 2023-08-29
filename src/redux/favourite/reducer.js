import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES, SET_FAVOURITES } from "./actions"

const initialState = {
    favourites: []
}

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES: {
            const newItems = [...state.favourites]
            if (newItems.length) {
                const index = newItems.findIndex(item => item.id === action.payload.id);
                index === -1 ? newItems.push(action.payload) : newItems[index] = action.payload;
            } else {
                newItems.push(action.payload)
            }
            return { ...state, favourites: newItems }
        }
        case DELETE_FROM_FAVOURITES: {
            const newItems = [...state.favourites]
            if (newItems.length) {
                const index = newItems.findIndex(item => item.id === action.payload.id);
                // eslint-disable-next-line no-unused-expressions
                index === -1 ? null : newItems.splice(index, 1);
            }
            return { ...state, favourites: newItems }
        }
        case SET_FAVOURITES: {
            return { ...state, favourites: action.payload }
        }
        default: return state
    }
}

export default favouritesReducer