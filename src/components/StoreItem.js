import React, {useState} from 'react'
import DetailsModal from './DetailsModal'

const StoreItem = (props) => {

	const [showDetailsModal, setShowDetailsModal] = useState(false);

	const handleDetails = function(id){
		console.log(id, "handleDetails")
		setShowDetailsModal(true);
	}

	const handleUpdate = function(id){
		console.log(id, "handleUpdate")
	}

	const handleDelete = function(id){
		console.log(id, "handleDelete")
	}

	const handleClose = function(){
		setShowDetailsModal(false);	
	}

	return (
		<div className="storeItem">
			<div><span>Logo:</span> <img alt={props.item.storeTitle} src={props.item.storeLogoURL}/></div>
			<div><span>Müşteri Adı:</span> {props.item.storeTitle}</div>
			<div><span>Müşteri Kodu :</span> {props.item.storeId}</div>
			<div><span>Açıklama :</span> {props.item.storeDesc.substring(0, 100)}</div>
			<div>
				<button className="btn btn-sm btn-primary" onClick={() => handleDetails(props.item.storeId)}>Detaylar</button>&nbsp;
				<button className="btn btn-sm btn-primary" onClick={() => handleUpdate(props.item.storeId)}>Güncelle</button>&nbsp;
				<button className="btn btn-sm btn-primary" onClick={() => handleDelete(props.item.storeId)}>Sil</button>&nbsp;
			</div>

			<DetailsModal show={showDetailsModal} handleClose={handleClose}></DetailsModal>
		</div>
	)
}

export default StoreItem