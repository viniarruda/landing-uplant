import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="uplant-background">
        <div className="container">
          <div className="header">
            <div className="navbar-brand logo">
              <img className="logo" src="../app/src/images/up-logo-header.png" />
            </div>
            <ul className="header-right">
              <li><a href="#sobre">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#novidades">Fique por dentro</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="up row">
            <div className="col-md-12 titulo-header">
              <h1><strong>Uplant</strong> - Investimento agrícula crowndfounding</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
