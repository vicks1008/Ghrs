import React from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/CarouselSliderStyles.scss';
import  {Animation, Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

export default class CarouselSlider extends React.Component {
  render(){
    return(
        <Animation type="zoomIn" delay="1.5s">
            <div className="carousel-container w-100">
                <Carousel
                  activeItem={1}
                  length={this.props.carouselLength}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                            <View>
                                <Animation type="fadeInUp" delay="1.5s">
                                    <img className="d-block w-100" src={this.props.ImgUrl1} alt="First slide" />
                                    <Mask overlay="black-light"></Mask>
                                </Animation>
                            </View>
                            <CarouselCaption>
                                <h3 className="h3-responsive">{this.props.h3title1}</h3>
                                <p>{this.props.text1}</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                            <View>
                                <img className="d-block w-100" src={this.props.ImgUrl2} alt="Second slide" />
                                <Mask overlay="black-light"></Mask>
                            </View>
                            <CarouselCaption>
                                <h3 className="h3-responsive">{this.props.h3title2}</h3>
                                <p>{this.props.text2}</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="3">
                            <View>
                                <img className="d-block w-100" src={this.props.ImgUrl3} alt="Third slide" />
                                <Mask overlay="black-light"></Mask>
                            </View>
                            <CarouselCaption>
                                <h3 className="h3-responsive">{this.props.h3title3}</h3>
                                <p>{this.props.text3}</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="4">
                            <View>
                                <img className="d-block w-100" src={this.props.ImgUrl4} alt="Fourth slide" />
                                <Mask overlay="black-light"></Mask>
                            </View>
                            <CarouselCaption>
                                <h3 className="h3-responsive">{this.props.h3title4}</h3>
                                <p>{this.props.text4}</p>
                            </CarouselCaption>
                        </CarouselItem>
                    </CarouselInner>
                </Carousel>
            </div>
        </Animation>
    );
  }
}

CarouselSlider.propTypes = {
  h3title1: PropTypes.string,
  h3title2: PropTypes.string,
  h3title3: PropTypes.string,
  h3title4: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  ImgUrl1: PropTypes.string,
  ImgUrl2: PropTypes.string,
  ImgUrl3: PropTypes.string,
  ImgUrl4: PropTypes.string,
  carouselLength: PropTypes.number
};