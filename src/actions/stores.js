import {
  ADD_STORE, 
  DELETE_STORE, 
  MODIFY_STORE, 
  GET_STORES,
  GET_STORES_ERROR
} from './types';

import stores from '../storedata.json'

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

export const getStores = () => async dispatch => {

  const st = await stores;

  try{
    dispatch({
      type: GET_STORES,
      payload: st
    })
  }catch(err){
    dispatch({
      type: GET_STORES_ERROR,
      payload: err
    })
  }
  

}