import { ADD_STORE, DELETE_STORE, MODIFY_STORE, GET_STORES } from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
	const {type, payload} = action

	switch(type){
		case GET_STORES:
			return payload
		case ADD_STORE:
			console.log([...state, payload], " ∆");
			return [...state, payload]
		case DELETE_STORE:
			return state.filter(store => store.storeId !== payload)
		case MODIFY_STORE:
			return state
		default:
			return state
	}
}