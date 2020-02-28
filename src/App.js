import React from 'react';
import './App.scss'; 
import service from './storedata.json'
import StoreItem from './components/StoreItem'

function App() {
  return (
    <div className="container">
      <div>
        {service.map(item => (
          <StoreItem item={item} key={item.storeId}/>
        ))}
      </div>
    </div>
  );
}

export default App;
