import { ADD_STORE, DELETE_STORE, MODIFY_STORE, GET_STORES } from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
	const {type, payload} = action

	switch(type){
		case ADD_STORE:
			return [...state, payload]
		case DELETE_STORE:
			return state.filter(store => store.storeId !== payload)
		case MODIFY_STORE:
			return state
		case GET_STORES:
			return payload
		default:
			return state
	}
}