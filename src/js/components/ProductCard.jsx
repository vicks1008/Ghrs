import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {

  render() {
    return (                
        <div className="productCardContainer">
            <table id="cart" className="table table-hover table-condensed">
                <thead>
                    {/*some css styling inline*/}
                    <tr>
                        <th style={{width: '50%'}}>{this.props.productTitle}</th>
                        <th style={{width: '10%'}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-th="Product">
                            <div className="text-left">
                                <img src="https://bit.ly/2EgVieF" alt="" className="img-thumbnail"/>
                            </div>  
                        </td>
                        <td>
                            <small className = "productDescription">{this.props.productDescription}</small>
                        </td>
                        <td data-th="Price">{this.props.productPrice}</td>
                        <td className="actions" data-th="">
                            <button className="btn btn-dark btn-sm"><i className="fas fa-shopping-cart"></i></button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
  }
}

export default ProductCard;
ProductCard.propTypes =
{
    productTitle: PropTypes.string,
    productDescription: PropTypes.string, 
    productPrice: PropTypes.number 
}; 