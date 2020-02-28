import React from 'react'

const StoreItem = (props) => {
	return (
		<div className="storeItem">
			<div><img src={props.item.storeLogoURL}/></div>
			<div><span>Müşteri Adı:</span> {props.item.storeTitle}</div>
			<div><span>Müşteri Kodu :</span> {props.item.storeId}</div>
			<div><span>Açıklama :</span> {props.item.storeDesc.substring(0, 100)}</div>
		</div>
	)
}

export default StoreItem