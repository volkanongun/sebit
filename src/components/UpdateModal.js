import React from 'react';

const UpdateModal = ({ handleClose, show, item }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="close-btn button"><strong>X</strong> close</button>

    		<div className="overflow details">
				<form>
					form here
				</form>
		    </div>
    	</div>
	       
    </div>
  );
};

export default UpdateModal;