import { DELETE_MODAL_IS_OPEN, ADDED_MODAL_IS_OPEN, CHANGE_PREVIOUS_MODAL } from "./actions"

export const setDeleteModal = (value) => ({ type: DELETE_MODAL_IS_OPEN, payload: value })
export const setAddedModal = (value) => ({ type: ADDED_MODAL_IS_OPEN, payload: value })
export const changePreviousModal = () => ({ type: CHANGE_PREVIOUS_MODAL })


