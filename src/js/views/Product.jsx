import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link, store } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import '../../styles/ProductStyles.scss';

export default class Product extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            products: null,
            magnifiedImagePoperties: {
                smallImage: {
                  isFluidWidth: true,
                  src: null,
                  sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                },
                largeImage: {
                  src: null,
                  width: 1200,
                  height: 1800
                },
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: false,
                enlargedImageContainerDimensions: {width: '200%', height: '200%'}
            }
        };
    }
    
    componentDidMount(){
        
        //get the categories from the store
        let products = store.getState('products');
        if(products) {
            let product = products.find((p) => {
                return (p.slug == this.props.match.params.product_slug);
              });
            this.setState({ products: product });
        }
        this.subscribe(store, 'product', (products) => {
            const product = products.find((p) => {
                return (p.slug == this.props.match.params.product_slug);
              });
            this.setState({ products: product });
        });
        console.log({products});
    }
    
    render(){
        return (
            <div className="product-container p-5">
                <h1>Product: {this.state.products.title}</h1>
                     
                <p>Description: {this.state.products.description}</p> 
                
                <div className="row">      
                    <div className="col-4">
                        <ul className="product-image-thumbnail-list">
                            <li>
                                <img 
                                src={this.state.products.image}
                                onClick={() => this.setState({
                                    magnifiedImagePoperties: {
                                        smallImage: {
                                          alt: '',
                                          isFluidWidth: true,
                                          src: this.state.products.image,
                                          sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                                        },
                                        largeImage: {
                                          alt: '',
                                          src: 'https://cdnimg.webstaurantstore.com/images/products/small/50487/500928.jpg',
                                          width: 1200,
                                          height: 1800
                                        },
                                        isHintEnabled: true,
                                        shouldHideHintAfterFirstActivation: false,
                                        enlargedImageContainerDimensions: {width: '200%', height: '200%'}
                                    }
                                })}/>
                            </li>
                            <li>
                                <img 
                                src='https://cdnimg.webstaurantstore.com/images/products/small/40635/1425438.jpg'
                                onClick={() => this.setState({
                                    magnifiedImagePoperties: {
                                        smallImage: {
                                          alt: '',
                                          isFluidWidth: true,
                                          src: 'https://cdnimg.webstaurantstore.com/images/products/small/40635/1425438.jpg',
                                          sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                                        },
                                        largeImage: {
                                          alt: '',
                                          src: 'https://cdnimg.webstaurantstore.com/images/products/small/40635/1425438.jpg',
                                          width: 1200,
                                          height: 1800
                                        },
                                        isHintEnabled: true,
                                        shouldHideHintAfterFirstActivation: false,
                                        enlargedImageContainerDimensions: {width: '200%', height: '200%'}
                                    }
                                })}/>
                            </li>
                            <li>
                                <img 
                                src='https://cdnimg.webstaurantstore.com/images/products/small/40445/477654.jpg'
                                onClick={() => this.setState({
                                    magnifiedImagePoperties: {
                                        smallImage: {
                                          alt: '',
                                          isFluidWidth: true,
                                          src: 'https://cdnimg.webstaurantstore.com/images/products/small/40445/477654.jpg',
                                          sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                                        },
                                        largeImage: {
                                          alt: '',
                                          src: 'https://cdnimg.webstaurantstore.com/images/products/small/40445/477654.jpg',
                                          width: 1200,
                                          height: 1800
                                        },
                                        isHintEnabled: true,
                                        shouldHideHintAfterFirstActivation: false,
                                        enlargedImageContainerDimensions: {width: '200%', height: '200%'}
                                    }
                                })}/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <div className="selected-product-image-container">
                            <div className="selected-product-image">
                                <ReactImageMagnify {...this.state.magnifiedImagePoperties}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-copy">
                    <h3>Touch</h3>
                    <p className="App-intro">
                    Press (long touch) image to magnify. Pan (drag) to traverse image.
                    </p>
                    <p className="App-intro">
                    Note the page can be scrolled when touch begins on image.
                    </p>
                    <h3>Mouse</h3>
                    <p>Hover image to magnify</p>
                </div>
                <Link to="/home">Back to home</Link>
            </div>
        );
    }
}

Product.propTypes = {
  productName: PropTypes.string,
  productImageSrc1: PropTypes.string,
  productImageSrc2: PropTypes.string,
  productImageSrc3: PropTypes.string,
  src: PropTypes.string
};