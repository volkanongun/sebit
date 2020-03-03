import React, {useState} from 'react';
import './App.scss'; 

import AddModal from './components/AddModal'

import Stores from './components/Stores'

import {Provider} from 'react-redux'
import store from './store'

function App() {

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = function(){
    // console.log("handleAdd");
    setShowAddModal(true);
  }

  const handleClose = function(){
    setShowAddModal(false);
  }

  return (
    <Provider store={store}>
      <div className="container">
        <h1>
          Mağazalar 
          <button onClick={handleAdd} className="btn btn-primary btn-md add-new-store">Yeni mağaza ekle</button>
        </h1>

        <Stores/>

        <AddModal show={showAddModal} handleClose={handleClose}></AddModal>
      </div>
    </Provider>
  );
}

export default App;