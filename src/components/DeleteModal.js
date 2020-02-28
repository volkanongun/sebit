import React from 'react';

const DeleteModal = ({ handleClose, show, item }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn" style={{top: "-50px"}}><strong>X</strong> close</button>

    		<div className="overflow overflow-delete details">
				Delete
		    </div>
    	</div>
	       
    </div>
  );
};

export default DeleteModal;