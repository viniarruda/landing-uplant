import React, { Component } from 'react';
import Header from './Header';
import Date from './Date';
import Sobre from './Sobre';
import Plataforma from './Plataforma';
import Newsletter from './Newsletter';
import Contato from './Contato';
import Footer from './Footer';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Date />
        <Sobre />
        <Plataforma />
        <Newsletter />
        <Contato />
        <Footer />
      </div>
    );
  }
}
