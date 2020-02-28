import React from 'react';

const DetailsModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="close-btn button"><strong>X</strong> close</button>

    		<div className="overflow">
				<p>Content Here</p>	        
		    </div>
    	</div>
	       
    </div>
  );
};

export default DetailsModal;