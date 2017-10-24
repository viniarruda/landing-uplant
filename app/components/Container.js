import React, { Component } from 'react';
import Header from './Header';
import Somos from './Somos';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Somos />
      </div>
    );
  }
}
