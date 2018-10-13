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
            const category = categories.find((c) => {
                return (c.slug == this.props.match.params.category_slug);
              });
            this.setState({ category, products: category.products });
        });
        
    }
    
    render() {
        
        let productCards = [];
        if(this.state.products) productCards = this.state.products.map((product, i) => 
            (<ProductCard key={i}
                productTitle={product.title}
                productDescription={product.description}
                productPricePropTypes={product.price} 
                originalProduct={product}
                image={product.img}
            />)
        );
        return (
            <div className="p-5">
                <h1>{(this.state.category)?this.state.category.name:"No Category"}</h1>
                <p>{(this.state.category)?this.state.category.description:"No Description"}</p>
                {productCards}
                <Link to="/">Back to home</Link>
            </div>
        );
    }
}
