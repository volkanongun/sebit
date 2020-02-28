import React, {useState} from 'react'
import DetailsModal from './DetailsModal'
import UpdateModal from './UpdateModal'
import DeleteModal from './DeleteModal'

const StoreItem = ({ item, service }) => {

	const [showDetailsModal, setShowDetailsModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const handleDetails = function(id){
		console.log(id, "handleDetails")
		setShowDetailsModal(true);
	}

	const handleUpdate = function(id){
		console.log(id, "handleUpdate")
		setShowUpdateModal(true);
	}

	const handleDelete = function(id){
		console.log(id, "handleDelete")
		setShowDeleteModal(true);
	}

	const handleClose = function(){
		setShowDetailsModal(false);	
		setShowUpdateModal(false);	
		setShowDeleteModal(false);	
	}

	return (
		<div className="storeItem">
			<div><span>Logo:</span> <img alt={item.storeTitle} src={item.storeLogoURL}/></div>
			<div><span>Müşteri Adı:</span> {item.storeTitle}</div>
			<div><span>Müşteri Kodu :</span> {item.storeId}</div>
			<div><span>Açıklama :</span> {item.storeDesc.length > 100 ? item.storeDesc.substring(0, 100) : item.storeDesc}</div>
			<div>
				<button className="btn btn-sm btn-primary" onClick={() => handleDetails(item.storeId)}>Detaylar</button>&nbsp;
				<button className="btn btn-sm btn-primary" onClick={() => handleUpdate(item.storeId)}>Güncelle</button>&nbsp;
				<button className="btn btn-sm btn-primary" onClick={() => handleDelete(item.storeId)}>Sil</button>&nbsp;
			</div>

			<DetailsModal item={item} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
			<UpdateModal item={item} show={showUpdateModal} handleClose={handleClose}></UpdateModal>
			<DeleteModal service={service} item={item} show={showDeleteModal} handleClose={handleClose}></DeleteModal>
			
		</div>
	)
}

export default StoreItem