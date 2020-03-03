import { ADD_STORE, DELETE_STORE, MODIFY_STORE, GET_STORES } from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
	const {type, payload} = action

	switch(type){
		case GET_STORES:
			return payload
		case ADD_STORE:
			return [payload, ...state]
		case DELETE_STORE:
			state = state.filter(store => store.storeId !== payload)
			return state;
		case MODIFY_STORE:
			return state
		default:
			return state
	}
}