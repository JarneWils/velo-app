import React from "react";
import '../styles/global.css';
import '../styles/bikes.css';
import pinIcon from '../public/pin-icon.png';
import playstore from '../public/playstore.png';
import appstore from '../public/appstore.png';
import mockup1 from '../public/mockup-1.png';
import mockup2 from '../public/mockup-2.png';



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
          <div className="bike__title"><img className="pin-icon" src={pinIcon} alt="pin"/>DE MEIR <div className="km1">1,2 km</div> </div>
        </div>
        </a>

        {/* footer */}
        <div className="footer">
          <div className="footer__container">
            <div className="footer__titel"> DOWNLOAD DE VELO APP</div>
            <div className="footer__tussen-titel"> Ervaar velo ook op je smartphone!</div>
            <div className="footer__voordelen">
              - Vind een station in de buurt.<br/>
              - Stippel de ideale route uit.<br/>
              - Contacteer ons binnen de minuut.<br/>
              - Heb Velo altijd bij de hand.<br/>
            </div>
            <div className="footer__store-imgs">
              <img className="playstore" src={playstore} alt="playstore"/>
              <img className="appstore" src={appstore} alt="appstore"/>
            </div>
          </div>

          {/* mockups */}
          <div className="mockups">
            <img className="mockup-1" src={mockup1} alt="mockup-1"/>
            <img className="mockup-2" src={mockup2} alt="mockup-2"/>
          </div>

        </div>

    </div>

  );
}

export default Bikes;
