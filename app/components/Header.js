import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar-default navbar-fixed-top" id="navigation">
	        <div className="container">
	            <div className="navbar-header">
	                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
	                    <span className="sr-only">Toggle navigation</span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                </button>
	                <a className="navbar-brand" href="#">
                        <img className="logo-1" src="../app/src/images/up-logo-header.png" alt="LOGO"/>
	                    <img className="logo-2" src="../app/src/images/up-logo-header.png" alt="LOGO"/>
	                </a>
	            </div>

	            <nav className="collapse navbar-collapse" id="navbar">
	                <ul className="nav navbar-nav navbar-right" id="top-nav">
	                    <li className="current"><a href="#body">Home</a></li>
	                    <li><a href="#about">Sobre</a></li>
	                    <li><a href="#service">Plataforma</a></li>
	                    <li><a href="#contact">Contato</a></li>
	                </ul>
	            </nav>
	        </div>
	    </div>
    );
  }
}
