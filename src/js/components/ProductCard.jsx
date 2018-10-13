import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { addProductToShopingCart, store } from '../flux.js';

export default class ProductCard extends React.Component {
    
    render() {
        return (                
            <div className="productCardContainer">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        {/*some css styling inline*/}
                        <tr>
                            <th style={{width: '100%'}}>
                                <Link to={'product/'+ this.props.slug}>
                                    <h3 
                                    className="product-card-title"
                                    >
                                        {this.props.productTitle}</h3>
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th="Product" style={{width: '20%'}}>
                                <div className="text-left">
                                    <img src={this.props.image} alt="" className="img-thumbnail"/>
                                </div>
                            </td>
                            <td style={{width: '50%'}}>
                                <small className="productDescription">{this.props.productDescription}</small>
                            </td>
                            <td data-th="Price" style={{width: '15%'}}>{this.props.productPrice}</td>
                            <td className="actions" data-th="" style={{width: '15%'}}>
                                <button 
                                    onClick={() => addProductToShopingCart(this.props.originalProduct)}
                                    className="btn btn-dark btn-sm"><i className="fas fa-shopping-cart"></i></button>
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
ProductCard.propTypes =
{
    productTitle: PropTypes.string,
    productDescription: PropTypes.string, 
    productPrice: PropTypes.number,
    originalProduct: PropTypes.object,
    image: PropTypes.string,
    slug: PropTypes.string
}; 