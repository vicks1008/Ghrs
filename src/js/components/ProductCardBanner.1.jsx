import React from "react";
import PropTypes from 'prop-types';
import SpecImage1 from '../../img/spec_n3.jpg';
import SpecImage2 from '../../img/spec_44.jpg';
import SpecImage3 from '../../img/spc_67.jpg';
import SpecImage4 from '../../img/spec_ship.jpg';

class ProductCardBanner extends React.Component {
  render() {
    return ( 
        <div classNameName="prodscontainer">
            <h3 classNameName="productBannerHeader"><b>Veteran&#x27;s Day Special</b></h3>
            <div className="row">
                <div className="container">
                    <div className="test_box box-01 col-xs-6 col-md-4">
                        <div className="inner">
                            <a href="#" className="test_click">
                                <div className="flex_this">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="test_box box-02 col-xs-6 col-md-4">
                        <div className="inner">
                            <a href="#" className="test_click">
                                <div className="flex_this">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="test_box box-03 col-xs-6 col-md-4">
                        <div className="inner">
                            <a href="#" className="test_click">
                                <div className="flex_this">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="test_box box-04 col-xs-6 col-md-4">
                        <div className="inner">
                            <a href="#" className="test_click">
                                <div className="flex_this">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="test_box box-05 col-xs-6 col-md-4">
                        <div className="inner">
                            <a href="#" className="test_click">
                                <div className="flex_this">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="test_box box-06 col-xs-6 col-md-4">
                        <div className="inner">
                            <a href="#" className="test_click">
                                <div className="flex_this">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
  }
}

export default ProductCardBanner;
