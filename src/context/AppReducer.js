export default (state, action) => {
	switch(action.type){
		case 'DELETE_STORE':
			return {
				...state,
				stores: state.stores.filter(store => {
					return store.storeId !== action.payload
				})
			}
		case 'ADD_STORE':
			return {
				...state,
				stores: [action.payload, ...state.stores]
			}
		default:
			return state;
	}
}