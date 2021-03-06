import React from 'react';

const DetailsModal = ({ handleClose, show, item }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn"><strong>X</strong> close</button>

    		<div className="overflow details">
				<div>{item.storeLogoURL ? <img alt={item.storeTitle} src={item.storeLogoURL}/> : <img width="156px" alt="dummy" height="93px" style={{"background":"#efefef"}}/>}</div>
				<div><span>Müşteri Adı:</span> {item.storeTitle}</div>
				<div><span>Müşteri Kodu :</span> {item.storeId}</div>
				<div><span>Açıklama :</span> {item.storeDesc}</div>
		    </div>
    	</div>
	       
    </div>
  );
};

export default DetailsModal;