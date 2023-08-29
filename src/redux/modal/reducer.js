import { DELETE_MODAL_IS_OPEN, ADDED_MODAL_IS_OPEN, CHANGE_PREVIOUS_MODAL } from "./actions"

const initialState = {
    deleteModalIsOpen: false,
    addedModalIsOpen: false,
    previousModal: '',
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MODAL_IS_OPEN: {
            return { ...state, deleteModalIsOpen: action.payload }
        }
        case ADDED_MODAL_IS_OPEN: {
            return { ...state, addedModalIsOpen: action.payload }
        }
        case CHANGE_PREVIOUS_MODAL: {
            const newState = { ...state };
            if (newState.deleteModalIsOpen) {
                newState.previousModal = 'deleteModal'
            } else if (newState.addedModalIsOpen) {
                newState.previousModal = 'addedModal'
            }
            return newState
        }
        default: return state
    }
}

export default modalReducer