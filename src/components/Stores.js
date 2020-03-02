import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {getStores} from '../actions/stores'
import StoreItem from './StoreItem'
import Pagination from './Pagination';

const Stores = ({getStores, stores}) => {

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const currentPosts = stores.length ? stores.slice(indexOfFirstPost, indexOfLastPost) : null;

	useEffect(() => {
		getStores();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPosts])


	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div>
			<div>{currentPosts ? currentPosts.map(item => (
				            <StoreItem item={item} key={item.storeId} currentPage={currentPage}/>
				          )) : null}</div>
			
			<Pagination
	          postsPerPage={postsPerPage}
	          totalPosts={stores ? stores.length : null}
	          paginate={paginate}
	          currentPage={currentPage}
	        />

		</div>
	)
}


const mapStateToProps = state => ({
  stores : state.stores
})


export default connect(mapStateToProps, {getStores})(Stores);