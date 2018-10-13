import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import {store} from "../flux.js";
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';
import PropTypes from 'prop-types';
import  { Animation }  from 'mdbreact';
import ListGroupItem from 'mdbreact';

class SearchResults extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            category: null,
            products: null
        };
    }
    
    componentDidMount(){
        
        //get the categories from the store
        let products = store.getState('product');
        if(products) {
            products = products.filter((p) => {
                return (p.title.indexOf(this.props.match.params.query) !=-1);
            });
            this.setState({products});
        }
        this.subscribe(store, 'product', (products) => {
            products = products.filter((p) => {
                return (p.title.toLowerCase().indexOf(this.props.match.params.query.toLowerCase()) !=-1);
              });
            this.setState({ products });
        });
        
    }
    
    render() {
        return (
            <div className="p-6">
                <Animation type="slideInRight" delay="1.1s">
                    <div className="category-animated-div">
                        {(this.state.products) ?
                            this.state.products.map((product,i) => (
                                <ProductCard key={i}
                                    productTitle={product.title}
                                    productDescription={product.description}
                                    productPricePropTypes={product.price} 
                                    originalProduct={product}
                                    image={product.img}
                                    slug={product.slug}
                                />
                            )):''
                        }
                    </div>
                </Animation>
                <Link to="/">Back to home</Link>
            </div>
        );
    }
}

export default SearchResults; 