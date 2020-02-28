import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import stores from '../storedata.json'

const initialState={
	stores: stores
}

export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	function deleteStore(storeId) {
		dispatch({
			type: 'DELETE_STORE',
			payload: storeId
		})
	}

	function addStore(store) {
		dispatch({
			type: 'ADD_STORE',
			payload: store
		})
	}

	return (<GlobalContext.Provider value={{
		stores: state.stores,
		deleteStore,
		addStore
	}}>
		{children}
	</GlobalContext.Provider>)
}