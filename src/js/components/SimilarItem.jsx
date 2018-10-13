import React from "react";
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx';


class SimilarItem extends React.Component {
  
  render() {
    return (                
        <div className="brand-header-container" >
            <h3 className="brandBannerHeader">Featured Brands</h3>
            <div className="brands">
                <img src="https://bit.ly/2yyYbS3" alt="" className="img-thumbnail"/>
                <img src="https://bit.ly/2pRPiyN" alt="" className="img-thumbnail"/>
                <img src="https://bit.ly/2QLfS8m" alt="" className="img-thumbnail"/>
                <img src="https://bit.ly/2yhrMQC" alt="" className="img-thumbnail"/>
            </div>
        </div>
    );
  }
}

export default SimilarItem;
