import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { store } from "../flux.js";
import { Link } from "react-router-dom";
import { Animation, Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, ListGroup, ListGroupItem } from 'mdbreact';
import AboutThisItem from '../components/AboutThisItem.jsx';
import CarouselSlider from '../components/CarouselSlider.jsx';
import CategoryList from '../components/CategoryList.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProductCardBanner from '../components/ProductCardBanner.jsx';
import RatingStar from '../components/RatingStar.jsx';
import SimilarItem from '../components/SimilarItem.jsx';
import Specials from '../components/Specials.jsx';
import '../../styles/HomeStyles.scss';

export default class Home extends Flux.DashView {
  constructor(){
        super();
        this.state = {
            categories: []
        };
    }
  
  componentDidMount(){
        //This is getting the categories from the state & if there are categories
        //then subscribe
        let categories = store.getState('category');
        if(categories) this.setState({categories});
        this.subscribe(store, 'category', (categories) => {
            this.setState({ categories });
        });
    }
  
  render() {
    return (
        <div className="text-center">
            {//* Navbar goes here.
            }
            <CarouselSlider
            ImgUrl1='https://cdnimg.webstaurantstore.com/images/site/new/slides/lg-vegalene-release-spray_m9ydux.jpg'
            ImgUrl2='https://cdnimg.webstaurantstore.com/images/site/new/slides/lg-cambro-camwear.jpg'
            carouselLength={2}
            h3title1="Labor Day Blow Out"
            h3title2= "Catering to all Restaurant Needs"
            text1= "FREE SHIPPING ON ALL ORDERS OVER $50"
            text2= "From Schools to Hotels, We Have What You Need"
            />

            {//* ProductCard goes here.
            }

            {//* Product Categories go here.
            }
            <div className="category-wrapper">
                <ul className="category-animated-div">
                    <Animation type="slideInRight" delay="1.1s">
                        {this.state.categories.map(c => (
                            <Link 
                            to={'category/'+ c.slug} 
                            key={c.id} 
                            >
                                <ListGroupItem className="hvr-grow-shadow">{c.name}</ListGroupItem>
                            </Link>
                        ))}
                    </Animation>
                </ul>
            </div>
            {//* Product Cards go here.
            }
            <Animation type="slideInRight" delay="1.2s">
                <ProductCardBanner/>
                <ProductCard />
            </Animation>
            <Animation type="slideInRight" delay="1.3s">
                <AboutThisItem 
                    productDetails=""
                    productShipping= ""
                    productQuestions= ""
                />
            </Animation>
            {//* Similar items go here.
            }
            <Animation type="slideInRight" delay="1.4s">
                <SimilarItem />
            </Animation>
            <Animation type="slideInRight" delay="1.5s">
                <Specials />
            </Animation>
        </div>
    );
  }
}
