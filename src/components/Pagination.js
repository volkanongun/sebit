import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextpage = function(){
    console.log("nextpage")

    if (currentPage === pageNumbers[pageNumbers.length-1]) {
      return false;
    }

    paginate(currentPage+=1)
  }

  const prevpage = function(){

    if (currentPage === 1) {
      return false;
    }

    paginate(currentPage-=1)
  }

  return (
    <nav>
      <ul className='pagination'>
        <li>
          <a href="#!" onClick={prevpage} className='page-link'> &lt;&lt; </a>
        </li>

        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            { number === currentPage ? 
              <span className="page-link" style={{"color": "#3a3a3a","background": "#efefef"}}>{number}</span> : 
              <a onClick={() => paginate(number)} href={`#${number}`} className='page-link'>
              {number}
              </a>} 
          </li>
        ))}

          <li>
            <a href="#!" onClick={nextpage} className='page-link'> &gt;&gt; </a>
          </li>
      </ul>
    </nav>
  );
};

export default Pagination;
