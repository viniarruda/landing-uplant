import React, { Component } from 'react';

export default class Plataforma extends Component {
  render() {
    return (
      <section id="service" className="section">
          <div className="container">
              <div className="row">
                  <div className="heading wow fadeInUp">
                      <h2>Our service</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                  </div>
                  <div className="col-sm-6 col-md-3 wow fadeInLeft">
                      <div className="service">
                          <div className="icon-box">
                            <span className="icon">
                                  <i className="ion-android-desktop"></i>
                              </span>
                          </div>
                          <div className="caption">
                              <h3>Multiplataforma</h3>
                              <p>Nosso site foi feito para se adequar para todos os dispositivos, utilizando da tecnologia Pwa, nossa plataforma é um app que não tem a necessidade de instalação</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.3s">
                      <div className="service">
                          <div className="icon-box">
                            <span className="icon">
                                  <i className="ion-lock-combination"></i>
                              </span>
                          </div>
                          <div className="caption">
                            <h3>Segurança</h3>
                              <p>Invista de forma prática e segura. Escolha o investimento que melhor se enquadra com você! Com nossos relatórios sobre as safras, sua escolha fica bem mais fácil.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.6s">
                      <div className="service">
                          <div className="icon-box">
                            <span className="icon">
                                  <i className="ion-arrow-graph-up-right"></i>
                              </span>
                          </div>
                          <div className="caption">
                              <h3>Aumente seu capital</h3>
                              <p>Junte-se com outros investidores para conseguir alcançar a meta.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.9s">
                      <div className="service">
                          <div className="icon-box">
                            <span className="icon">
                                  <i className="ion-earth"></i>
                              </span>
                          </div>
                          <div className="caption">
                              <h3>Crowdfounding</h3>
                              <p>Crownfunding ou investimento coletivo, é uma forma de arrecadação de dinheiro, através da internet, para projetos de todo o tipo, seja ele: pequenos negócios, invenções, ONGs, filantropia, entre outros.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
