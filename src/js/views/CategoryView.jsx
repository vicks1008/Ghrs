import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import {store} from "../flux.js";
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';
import PropTypes from 'prop-types';


export default class CategoryView extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            category: null,
            products: null
        };
    }
    
    componentDidMount(){
        
        //get the categories from the store
        let categories = store.getState('category');
        if(categories) {
            let category = categories.find((c) => {
                return (c.slug == this.props.match.params.category_slug);
              });
            this.setState({category});
        }
        this.subscribe(store, 'category', (categories) => {
            let category = categories.find((c) => {
                return (c.slug == this.props.match.params.category_slug);
              });
            this.setState({category});
        });
        
        
        
        //get the products from the store
        let products = store.getState('product');
        if(products != null) {
            let category = categories.find((c) => {
                return (c.slug == this.props.match.params.category_slug);
              });
            this.setState({category});
        }
        this.subscribe(store, 'product', (products) => {
            const subsetOfProducts = products.filter(prod => prod.category == 1);
            this.setState({products: subsetOfProducts});
        });
    }
    
    render() {
        // const producCards = this.state.products.map((product) => 
        //     // (<ProductCard
        //     //     productTitle={product.title}
        //     //     productDescription={product.description}
        //     //     productPricePropTypes={product.price} 
        //     // />) NEED TO HARD CODE PRODUCTS 
        // //);
        return (
            <div className="p-5">
                <h1>{(this.state.category)?this.state.category.name:"No Category"}</h1>
                <p>{(this.state.category)?this.state.category.description:"No Description"}</p>
                {/*{producCards}*/}
                <Link to="/">Back to home</Link>
            </div>
        );
    }
}
