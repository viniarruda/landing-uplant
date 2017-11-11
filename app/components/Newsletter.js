import React, { Component } from 'react';

export default class Newsletter extends Component {
  render() {
    return (
      <section id="call-to-action" className="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 wow text-center">
                      <div className="block">
                          <h2>Quer receber as novidades antes de todo mundo?</h2>
                          <p>Inscreva seu e-mail para receber Newsletter Informativas sobre nós</p>
                          <div className="form-group">
                              <input type="text" className="form-control" placeholder="Digite seu e-mail"/>
                              <button className="btn btn-default btn-submit" type="submit">Inscrever</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
