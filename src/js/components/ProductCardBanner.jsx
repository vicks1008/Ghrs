import React from "react";

class ProductCardBanner extends React.Component {

  render() {
    return (                
        <div>
            <h3>Veteran&#x27;s Day Sales</h3>
            <div className="row row-centered">
                <div className="column"><img src="https://bit.ly/2OhJa1y" className="rounded" alt="..."/></div>
                <div className="column"><img src="https://bit.ly/2ycJrca" className="rounded" alt="..."/></div>
                <div className="column"><img src="https://bit.ly/2OhJa1y" className="rounded" alt="..."/></div>
            </div>
        </div>
    );
  }
}

export default ProductCardBanner;
