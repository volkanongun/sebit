import React, {useContext} from 'react';

import { GlobalContext } from '../context/GlobalState'

const DeleteModal = ({ handleClose, show, item }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleGiveup = function () {
  	handleClose()
  }

  const {deleteStore} = useContext(GlobalContext)

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn" style={{top: "-70px"}}><strong>X</strong> close</button>

    		<div className="overflow overflow-delete details">
				<p>Mağazayı silmek istediğinize emin misiniz?</p>

				<button className="btn btn-primary btn-sm" onClick={() => {handleClose(); return deleteStore(item.storeId)}}>Onayla</button> &nbsp;
				<button className="btn btn-secondary btn-sm" onClick={handleGiveup}>Vazgeç</button>
		    </div>
    	</div>
	       
    </div>
  );
};

export default DeleteModal;