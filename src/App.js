import React, {useState} from 'react';
import './App.scss'; 
import service from './storedata.json'
import StoreItem from './components/StoreItem'
import Pagination from './components/Pagination';

import AddModal from './components/AddModal'

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = service.slice(indexOfFirstPost, indexOfLastPost);
  console.log(indexOfFirstPost, indexOfLastPost, currentPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = function(id){
    console.log(id, "handleAdd")
    setShowAddModal(true);
  }

  const handleClose = function(){
    setShowAddModal(false);
  }

  return (
    <div className="container">
      <h1>
        Mağazalar 
        <button onClick={handleAdd} className="btn btn-primary btn-md new-store">Yeni mağaza ekle</button>
      </h1>

      {currentPosts.map(item => (
        <StoreItem item={item} key={item.storeId} service={service} />
      ))}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={service.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <AddModal service={service} show={showAddModal} handleClose={handleClose}></AddModal>
    </div>
  );
}

export default App;
