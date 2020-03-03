import React from 'react';
import {connect} from 'react-redux'
import {deleteStore} from '../actions/stores'

const DeleteModal = ({ handleClose, show, item, deleteStore }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleGiveup = function () {
  	handleClose()
  }

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn" style={{top: "-70px"}}><strong>X</strong> close</button>

    		<div className="overflow overflow-delete details">
				<p>Mağazayı silmek istediğinize emin misiniz?</p>

				<button className="btn btn-primary btn-sm" onClick={() => {deleteStore(item.storeId); return handleClose()}}>Onayla</button> &nbsp;
				<button className="btn btn-secondary btn-sm" onClick={handleGiveup}>Vazgeç</button>
		    </div>
    	</div>
	       
    </div>
  );
};

export default connect(null,{deleteStore})(DeleteModal);