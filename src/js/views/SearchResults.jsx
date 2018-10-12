import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import {store} from "../flux.js";
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';
import PropTypes from 'prop-types';


class SearchResults extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            category: null
        };
    }
    
    componentDidMount(){
        console.log(this.props.match.params.query);
    }
    
    render() {
        return (
            <div className="p-6">
                <h1>{(this.state.category)?this.state.category.name:"No Category"} Hello World</h1>
                <p>{(this.state.category)?this.state.category.description:"No Description"}</p>
                <ProductCard
                productTitle="Microwave"
                productDescription= "asdfasdf"
                productPricePropTypes="23" 
                
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <Link to="/">Back to home</Link>
            </div>
        );
    }
}

export default SearchResults; 