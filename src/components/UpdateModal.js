import React, {useState} from 'react';
import {connect} from 'react-redux'
import {modifyStore} from '../actions/stores'

const UpdateModal = ({ handleClose, show, item, modifyStore }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [storeTitle, setStoreTitle] = useState(item.storeTitle)
  const [storeDesc, setStoreDesc] = useState(item.storeDesc)
  const [memberId, setMemberId] = useState(item.memberId)
  const [storeType, setStoreType] = useState(item.storeType)

  const handleUpdate = function(e){
    e.preventDefault();
    item.storeTitle = storeTitle
    item.storeDesc = storeDesc
    item.memberId = memberId
    item.storeType = storeType

    modifyStore({item})
    handleClose();
  }

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn"><strong>X</strong> close</button>

    		<div className="overflow details update-form">
				<form>
					<div>
              <input className="form-control" type="text" value={storeTitle ? storeTitle : ""} required title="Zorunlu alan" onChange={(e) => setStoreTitle(e.target.value)} placeholder="İsim girin..." />
            </div>
            <div>
              <input className="form-control" type="number" value={memberId ? memberId : ""} required title="Zorunlu alan" onChange={(e) => setMemberId(e.target.value)} placeholder="Müşteri kodunu girin..." />
            </div>
            <div>
              <input className="form-control" type="text" value={storeType ? storeType : ""} required title="Zorunlu alan" onChange={(e) => setStoreType(e.target.value)} placeholder="Mağaza Tipini girin..." />
            </div>
            <div>
              <textarea className="form-control" value={storeDesc ? storeDesc : ""} required title="Zorunlu alan" onChange={(e) => setStoreDesc(e.target.value)} placeholder="Açıklama girin..." />
            </div>
            <button className="btn btn-primary" onClick={handleUpdate}>Güncelle</button>
				</form>
		    </div>
    	</div>
	       
    </div>
  );
};

export default connect(null,{modifyStore})(UpdateModal);