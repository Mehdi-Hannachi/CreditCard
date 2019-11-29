import React from "react";
import cardpuce from "../component/puce.png";
import cardvisa from "../component/visa.png";


function card() {
  return (
    <div className="card">
      <span className="title"> CREDIT CARD </span>
      <div className="container1">
        <img className="puce" src={cardpuce} />
        <span className="rib">
          1234 &nbsp;&nbsp; 1234 &nbsp;&nbsp; 1234 &nbsp;&nbsp; 1234
        </span>
        <span className="my"> month/year</span>
        <div className="test">
          <span className="code">5422</span>
          <span className="date">11/50</span>
        
        </div>

        
        <span className="valid">Valid</span>
        
        <span className="thru">Thru</span>
        
        

        <span>CARDHOLDER</span>
      </div>
      <img className="visa" src={cardvisa} />


    </div>
  );
}

export default card;
