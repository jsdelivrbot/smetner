import { ADD_ITEM, EDIT_ITEM, ITEM_TO_STORE, DELETE_ITEM } from '../actions/index';

const INITIAL_STATE = { all: [], itemStore: null };

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_ITEM:
            return {...state, all: [...state.all, action.payload]};

        case EDIT_ITEM:

            const editedList = [...state.all];

            for (let i = 0; i < editedList.length; i++) {
                if (editedList[i].id == action.payload.id) {
                    editedList[i].goods = action.payload.goods;
                }
            }
            console.log(editedList);
            return {...state, all: editedList };

        case ITEM_TO_STORE:

            return {...state, itemStore: action.payload};

        case DELETE_ITEM:
            const newList = state.all.filter(item => item.id !== action.payload);
            return {...state, all: newList};

        default:
            return state;
    }

}