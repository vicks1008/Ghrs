import React from "react";

class ProductCardBanner extends React.Component {
    render() {
        return (
            <div className="container prodscontainer">
                {/* VERSION 2 */}
                <h3 className="productBannerHeader"><b>Veteran&#x27;s Day Special</b></h3>
                <div className="row">
                    <div className="col-sm"><img className="card-img"  alt="stuff" src="https://bit.ly/2PrXaT6"/></div>
                    <div className="col-sm"><img className="card-img"  alt="stuff" src="https://bit.ly/2PrYZ2h"/></div>
                    <div className="col-sm"><img className="card-img"  alt="stuff" src="https://bit.ly/2CbRuIU"/></div>
                </div>
                <div className="row">
                    <div className="col-sm"><img className="card-img"  alt="stuff" src="https://bit.ly/2Cc9Dq3"/></div>
                    <div className="col-sm"><img className="card-img"  alt="stuff" src="https://cdnimg.webstaurantstore.com/images/site/new/slides/hobart-dish-washers-mobile.jpg"/></div>
                    <div className="col-sm"><img className="card-img"  alt="stuff" src="https://bit.ly/2EfyPi4"/></div>
                </div>
            </div>
        );
    }
}

export default ProductCardBanner;
