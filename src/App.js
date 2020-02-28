import React, {useState} from 'react';
import './App.scss'; 
import service from './storedata.json'
import StoreItem from './components/StoreItem'
import Pagination from './components/Pagination';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = service.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {currentPosts.map(item => (
        <StoreItem item={item} key={item.storeId} service={service} />
      ))}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={service.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
