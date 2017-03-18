export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ITEM_TO_STORE = 'ITEM_TO_STORE';
export const DELETE_ITEM = 'DELETE_ITEM';

export function editItem(id, goods) {

    const editedItem = {id, goods};

    return {
        type: EDIT_ITEM,
        payload: editedItem
    }
}

export function newItemCreate(value) {

    const newItem = {
        id: +(new Date()),
        goods: value
    };

    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

export function saveItemToStore(item) {

    return {
        type: ITEM_TO_STORE,
        payload: item
    }
}

export function deleteItem(id) {

    return {
        type: DELETE_ITEM,
        payload: id
    }
}