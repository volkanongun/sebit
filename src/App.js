import React, {useState,useContext} from 'react';
import './App.scss'; 
import StoreItem from './components/StoreItem'
import Pagination from './components/Pagination';

import AddModal from './components/AddModal'

import { GlobalProvider, GlobalContext } from './context/GlobalState'

function App() {

  const {stores} = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = stores.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = function(){
    console.log("handleAdd");
    setShowAddModal(true);
  }

  const handleClose = function(){
    setShowAddModal(false);
  }

  return (
      <GlobalProvider>
        <div className="container">
          <h1>
            Mağazalar 
            <button onClick={handleAdd} className="btn btn-primary btn-md add-new-store">Yeni mağaza ekle</button>
          </h1>

            {currentPosts.map(item => (
              <StoreItem item={item} key={item.storeId} currentPage={currentPage}/>
            ))} 

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={stores.length}
            paginate={paginate}
            currentPage={currentPage}
          />

          <AddModal stores={stores} show={showAddModal} handleClose={handleClose}></AddModal>
        </div>
      </GlobalProvider>
  );
}

export default App;
