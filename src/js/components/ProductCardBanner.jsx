import React from "react";
import PropTypes from 'prop-types';
import SpecImage1 from '../../img/spec_n3.jpg';
import SpecImage2 from '../../img/spec_44.jpg';
import SpecImage3 from '../../img/spc_67.jpg';
import SpecImage4 from '../../img/spec_ship.jpg';

class ProductCardBanner extends React.Component {
  render() {
    
    const items = [
      {
        src: {SpecImage1}
      },
      
      {
        src: {SpecImage2}
      },
      {
        src: {SpecImage3}
      }, 
      {
        src: {SpecImage4}
      }
    ];
    
    return ( 
        <div className="vet-spec-container">
            <h3 className="productBannerHeader">Veteran&#x27;s Day Special</h3>
            <div className="flex-row">
                <div className="flex-col"><img src={SpecImage1} className="img1" alt="..."/></div>
                <div className="flex-col"><img src={SpecImage2} className="img2" alt="..."/></div>
            </div>
            <div className="flex-row">
                <div className="flex-col"><img src={SpecImage3} className="img3" alt="..."/></div>
                <div className="flex-col"><img src={SpecImage4} className="img4" alt="..."/></div>
            </div>
        </div>
    );
  }
}

export default ProductCardBanner;
