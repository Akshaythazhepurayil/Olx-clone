import React from 'react';


import './View.css';
function View() {
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="https://imgcdn.oto.com/large/gallery/color/15/2434/hyundai-creta-2022-color-334131.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 100000 </p>
          <span>Hyundai Creta</span>
          <p>our Wheeler</p>
          <span>Tue Nov 08 2022</span>
        </div>
       <div className="contactDetails">
          <p>Seller details</p>
          <p>aka</p>
          <p>1234567890</p>
        </div> 
      </div>
    </div>
  );
}
export default View;
