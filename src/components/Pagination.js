import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(paginate," ?")

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            { number === currentPage ? <span className="page-link" style={{"color": "#3a3a3a","background": "#efefef"}}>{number}</span> : <a onClick={() => paginate(number)} href={`#${number}`} className='page-link'>
              {number}
            </a>}
              
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
