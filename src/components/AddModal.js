import React, {useState} from 'react';

const AddModal = ({ handleClose, show, item }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [storeTitle, setStoreTitle] = useState("")
  const [storeDesc, setStoreDesc] = useState("")
  const [memberId, setMemberId] = useState("")
  const [storeType, setStoreType] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();

    const newStore = {
      storeId: Math.floor(Math.random() * 100000000),
      storeTitle,
      "storeLogoURL" : "",
      storeDesc,
      memberId,
      "displayLogo": 1,
      "storeOnWait": null,
      "storeType": null
    }

    console.log(newStore)
    handleClose();
  }

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn"><strong>X</strong> close</button>

    		<div className="overflow details add-form">
					<form onSubmit={onSubmit}>
            <div>
              <input className="form-control" type="text" value={storeTitle} required title="Zorunlu alan" onChange={(e) => setStoreTitle(e.target.value)} placeholder="İsim girin..." />
            </div>
            <div>
              <input className="form-control" type="text" value={memberId} required title="Zorunlu alan" onChange={(e) => setMemberId(e.target.value)} placeholder="Müşteri kodunu girin..." />
            </div>
            <div>
              <input className="form-control" type="text" value={storeType} required title="Zorunlu alan" onChange={(e) => setStoreType(e.target.value)} placeholder="Mağaza Tipini girin..." />
            </div>
            <div>
              <textarea className="form-control" value={storeDesc} required title="Zorunlu alan" onChange={(e) => setStoreDesc(e.target.value)} placeholder="Açıklama girin..." />
            </div>
            <button className="btn btn-primary">Mağaza Ekle</button>
          </form>
		    </div>
    	</div>
	       
    </div>
  );
};

export default AddModal;