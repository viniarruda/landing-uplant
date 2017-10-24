import React, { Component } from 'react';
import Header from './Header';
import Somos from './Somos';
import Sobre from './Sobre';
import Blog from './Blog';
import Contato from './Contato';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Somos />
        <Sobre />
        <Blog />
        <Contato />
      </div>
    );
  }
}
