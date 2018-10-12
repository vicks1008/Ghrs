import React, { Component } from 'react';
import GeneralLogo from '../../../img/general-logo-with-tag.png';
import { browserHistory, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'; 
import { Link } from "react-router-dom";



class NavbarComponent extends React.Component {
    constructor(){    
        super();
        this.state = {
            search : {value:''}
        };
    }  
    
    
  
    render() {
       const handleChange = (e) => {
           this.setState({value: e.target.value});
       }; 
        
        return(
            <div> 
                <nav className="navbar navbar-default" role="navigation">
                    <a onClick={() =>this.props.history.push("/home")} className="navbar-brand logo" href="#"><img src={GeneralLogo} /></a>
                    <div className="menuButtons">
                        <button onClick={() =>this.props.history.push("/cart")} className="shoppingCart"><i className="fas fa-shopping-cart"></i></button>
                        <div className="dropdown show">
                            <button className="userButton">Account <i className="fas fa-user fa-1x"></i></button>
                            <div className="dropdown-content">
                                <a onClick={() =>this.props.history.push("/register")}href="#">Sign Up</a>
                                <a onClick={() =>this.props.history.push("/login")}href="#">Login</a>
                            </div>
                        </div>
                    </div>    
                </nav>
                <form className="searchBarContainer">
                    <input className="searchInput" 
                    type="text" 
                    placeholder="Search..."
                    //this value will show what the user is typing
                    value= {this.state.value}
                    //the value is working bc of the onChange!
                    onChange={handleChange}
                    />
                    {/*this button will gather the info and send the user to another view*/}
                    <button 
                    onClick={() =>this.props.history.push("/Search")}
                    className="button-search">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>    
            );
    }
}
export default withRouter(NavbarComponent) ;
NavbarComponent.propTypes =
{
    history: PropTypes.object
}; 


