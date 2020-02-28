import React from 'react';

const AddModal = ({ handleClose, show, item }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn"><strong>X</strong> close</button>

    		<div className="overflow details">
				<form>
					add form here
				</form>
		    </div>
    	</div>
	       
    </div>
  );
};

export default AddModal;