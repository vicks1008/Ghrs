import React, { Component } from 'react';
import GeneralLogo from '../../../img/general-logo-with-tag.png';
import Logoimg from '../../../img/the_logo.png';
import { browserHistory, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'; 
import { Link } from "react-router-dom";
import {Session} from 'bc-react-session';
import { logout } from '../../flux.js';


class NavbarComponent extends React.Component {
    constructor(){    
        super();
        this.state = {
            username: 'Account',
            isActive: false,
            productCount: 0,
            search : {value:''}
        };
    }  
    
    componentDidMount(){
        
        const session = Session.get();
        if(session.active){
            this.setState({
                username: session.payload.username,
                productCount: session.payload.products.length,
                isActive: true
            });
        }
        const unsubscribe = Session.onChange((session) => {
          if(session.active){
              this.setState({
                  username: session.payload.username,
                  productCount: session.payload.products.length,
                  isActive: true
              });
          }
          else
              this.setState({
                  username: 'Account',
                  productCount: 0,
                  isActive: false
              });
          
        });
        
    }
  
    render() {
       const handleChange = (e) => {
           this.setState({value: e.target.value});
       }; 
        
        return(
            <div> 
                <nav className="navbar navbar-default" role="navigation">
                    <a onClick={() =>this.props.history.push("/home")} className="navbar-brand logo" href="#"><img src={Logoimg} /></a>
                    <div className="menuButtons">
                        <button onClick={() =>this.props.history.push("/cart")} className="shoppingCart">{this.state.productCount}<i className="fas fa-shopping-cart"></i></button>
                        <div className="dropdown show">
                            <button className="userButton">{this.state.username} <i className="fas fa-user fa-1x"></i></button>
                            <div className="dropdown-content">
                                {(!this.state.isActive) ? 
                                    <span>
                                        <a onClick={() =>this.props.history.push("/register")}href="#">Sign Up</a>
                                        <a onClick={() =>this.props.history.push("/login")}href="#">Login</a>
                                    </span>
                                    :
                                    <a onClick={() => logout()}href="#">Logout</a>
                                }
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


