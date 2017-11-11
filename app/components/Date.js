import React, { Component } from 'react';

export default class Date extends Component {
  render() {
    return (
      <section id="hero-area">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="block">
                          <h1 className="wow fadeInDown">Uma plataforma de investimento crowndfounding</h1>
                          <p className="wow fadeInDown" data-wow-delay="0.3s">Após nossa V1 ser um sucesso, queremos surpreender a todos com a versão final. Fiquem ligados no calendário!</p>
                          <div className="wow fadeInDown" data-wow-delay="0.3s">
                            <a className="btn btn-default btn-home" href="#about" role="button">Saiba mais</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 wow zoomIn">
                      <div className="block">
                          <div className="counter text-center">
                              <ul id="countdown_dashboard">
                                  <li>
                                      <div className="dash days_dash">
                                          <div className="digit">0</div>
                                          <div className="digit">0</div>
                                          <div className="digit">0</div>
                                          <span className="dash_title">Dias</span>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="dash hours_dash">
                                          <div className="digit">0</div>
                                          <div className="digit">0</div>
                                          <span className="dash_title">Horas</span>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="dash minutes_dash">
                                          <div className="digit">0</div>
                                          <div className="digit">0</div>
                                          <span className="dash_title">Minutos</span>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="dash seconds_dash">
                                          <div className="digit">0</div>
                                          <div className="digit">0</div>
                                          <span className="dash_title">Segundos</span>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
