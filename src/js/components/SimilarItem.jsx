import React from "react";
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx';


class SimilarItem extends React.Component {
  
  render() {
    return (                
        <div className="product-header-container" >
            <h3 className="productBannerHeader">Featured Brands</h3>
            <div className="flex-row">
                <div className="flex-col imgprod"><img src="https://bit.ly/2yyYbS3" className="img1" alt="..."/></div>
                <div className="flex-col imgprod"><img src="https://bit.ly/2pMv61r" className="img2" alt="..."/></div>
                <div className="flex-col imgprod"><img src="https://bit.ly/2pRPiyN" className="img3" alt="..."/></div>
                <div className="flex-col imgprod"><img src="https://bit.ly/2QLfS8m" className="img4" alt="..."/></div>
            </div>
        </div>
    );
  }
}

export default SimilarItem;
