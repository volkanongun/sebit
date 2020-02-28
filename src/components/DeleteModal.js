import React from 'react';

const DeleteModal = ({ handleClose, show, item, service }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleGiveup = function () {
  	handleClose()
  }

  const handleDelete = function () {
	service.filter(i => i.storeId === item.storeId)
	console.log(service.filter(i => i.storeId !== item.storeId))
  }

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn" style={{top: "-70px"}}><strong>X</strong> close</button>

    		<div className="overflow overflow-delete details">
				<p>Dükkanı silmek istediğinize emin misiniz?</p>

				<button className="btn btn-primary btn-sm" onClick={handleDelete}>Onayla</button> &nbsp;
				<button className="btn btn-secondary btn-sm" onClick={handleGiveup}>Vazgeç</button>
		    </div>
    	</div>
	       
    </div>
  );
};

export default DeleteModal;