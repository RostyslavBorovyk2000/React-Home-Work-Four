import { ADD_TO_CART, CHANGE_CART_COUNTER, DELETE_FROM_CART, SET_CART } from './actions';


const initialState = {
    cart: [],
    cartCounter: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newItems = [...state.cart]
            if (newItems.length) {
                const index = newItems.findIndex(item => item.id === action.payload.id);
                index === -1 ? newItems.push(action.payload) : newItems[index] = action.payload;
            } else {
                newItems.push(action.payload)
            }
            return { ...state, cart: newItems }
        }
        case DELETE_FROM_CART: {
            const newItems = [...state.cart]
            if (newItems.length) {
                const index = newItems.findIndex(item => item.id === action.payload.id);

                if (index !== -1) {
                    // eslint-disable-next-line no-unused-expressions
                    action.payload.count === 0 ? newItems.splice(index, 1) : newItems[index] = action.payload;
                }
            }
            return { ...state, cart: newItems }
        }
        case SET_CART: {
            return { ...state, cart: action.payload }
        }
        case CHANGE_CART_COUNTER: {
            const newItems = [...state.cart]
            let cartItemsCounter;
            if (newItems.length) {
                cartItemsCounter = newItems.map((item) => item.count)
                    .reduce((acc, currentValue) => acc + currentValue);
            }
            return { ...state, cartCounter: cartItemsCounter }
        }
        default: return state
    }
}

export default cartReducer