import { ActionsTypes } from "../ActionTypes/ActionsTypes"


export const setStore = (stores) => {
    return {
        type: ActionsTypes.SET_STORE,
        payload: stores
    }
};

export const AddStore = (store) => {
    return {
        type: ActionsTypes.ADD_STORE,
        payload: store
    }
};

export const editStore = (storeId) => {
    return {
        type: ActionsTypes.EDIT_STORE,
        payload: storeId
    }
};

export const removeStore = (storeId) => {
    return {
        type: ActionsTypes.REMOVE_STORE,
        payload: storeId
    }
}; 