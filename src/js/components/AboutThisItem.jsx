import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class AboutThisItem extends Component {
  
  render() {
    return (
        <div>
            <div className="grid group invoice-parties invoice-grid">
                <div className="grid-1-2">
                    <div className="invoice-module">
                        <h3 className="boxTitle"><b>D E S I G N</b></h3>
                        <pre>We can help turn your concept into reality!</pre>
                    </div>
                </div>
                <div className="grid-1-2">
                    <div className="invoice-module">
                        <h3 className="boxTitle"><b>Q U O T E S</b></h3>
                        <pre>Get custom quotes and package deals from our experts.</pre>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

AboutThisItem.propTypes = {
  productDetails: PropTypes.string,
  productShipping: PropTypes.string,
  productQuestions: PropTypes.string
};


export default AboutThisItem;