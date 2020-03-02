import {ADD_STORE,DELETE_STORE,MODIFY_STORE} from './types';

export const addStore = (storeTitle,storeDesc,memberId,storeType) => dispatch => {

	const newStore = {
      storeId: Math.floor(Math.random() * 100000000),
      storeTitle,
      storeDesc,
      memberId,
      "storeLogoURL" : "",
      "displayLogo": 1,
      "storeOnWait": null,
      storeType
    }

    console.log(newStore);

    dispatch({
    	type: ADD_STORE,
    	payload: newStore
    })
}
