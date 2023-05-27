import React, { useState } from "react";
import '../styles/global.css';
import '../styles/bikes.css';
import pinIcon from '../public/pin-icon.png';


function Bikes() {
  return (
    <div className="container">

      {/* bike1 */}
      <a className="bike1__link" href="https://">
      <div className="bike1" href="https://">
        <div className="bike__title"><img className="pin-icon" src={pinIcon} alt="pin"/>ANTWERPEN CENTRAAL <div className="km1">0,8 km</div> </div>
      </div>
      </a>

      {/* bike2 */}
      <a className="bike1__link" href="https://">
      <div className="bike2" href="https://">
        <div className="bike__title"><img className="pin-icon" src={pinIcon} alt="pin"/>AP HOGESCHOOL <div className="km1">4,7 km</div> </div>
      </div>
      </a>

      {/* bike3 */}
      <a className="bike1__link" href="https://">
      <div className="bike3" href="https://">
        <div className="bike__title"><img className="pin-icon" src={pinIcon} alt="pin"/>DE MAIR <div className="km1">1,2 km</div> </div>
      </div>
      </a>
    </div>

  );
}

export default Bikes;
