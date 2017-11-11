import React, { Component } from 'react';

var videoStyle = {
  border: 'none'
};

export default class Sobre extends Component {
  render() {
    return (
      <section id="about" className="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-7 col-sm-12 wow fadeInLeft">
                    <div className="sub-heading">
                      <h3>Entenda um pouco mais sobre nós</h3>
                    </div>
                      <div className="block">
                          <p>Investir no segmento agrícola é uma das mais tradicionais formas de rentabilização de patrimônio, e há inumeras formas de investimento neste setor. Entretanto, os maiores lucros do segmento agrícola sempre foram restritos ao grandes produtores rurais - grande latifundiarios, que aplicavam seus recursos em tecnologia e grandes safras. O Uplant é uma plataforma de investimento agrícola que quebra esse paradigma, utilizando conceito de crowdfunding para tornar estes investimentos acesíveis a todos e dar acesso aos pequenos produtores rurais, recursos financeiros para sua produção agrícola.</p>
                          <p>
                          Através do UPLANT, investidores podem participar de empreendimentos agerícolas de pequenos e médios produtores rurais previamente selecionados. A partir de R$1 mil, o investidor pode adquirir uma quota da produção, de forma 100% digital, sem burocracia e com alto potencial de retorno.
                          </p>
                          <p>
                          Nós do UPLANT acreditamos que nenhum portfolio de investimentos está completo enquanto não possuir uma parcela alocada no segmento agrícola, e temos orgulho em oferecer um forma simplificada e rentável de investir neste mercado.
                          </p>
                      </div>
                  </div>
                  <div className="col-md-5 col-sm-12 wow fadeInLeft" data-wow-delay="0.3s">
                      <div className="about-slider">
                        <div className="init-slider">
                          <div className="about-item">
                            <img src="../app/src/images/1.jpg" alt="" className="img-responsive"/>
                          </div>
                          <div className="about-item">
                            <img src="../app/src/images/3.jpg" alt="" className="img-responsive"/>
                          </div>
                          <div className="about-item">
                            <img src="../app/src/images/5.jpg" alt="" className="img-responsive"/>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="team">
                    <h1>Nossa equipe</h1>
                    <div className="card-team">
                      <img src="../app/src/images/equipe/gabriel.jpg" />
                      <div className="card-subtitle">
                        <ul>
                          <li>
                            Gabriel Souza
                          </li>
                          <li>
                            Negócios
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-team">
                      <img src="../app/src/images/equipe/guilherme.jpg" />
                      <div className="card-subtitle">
                        <ul>
                          <li>
                            Guilherme Souza
                          </li>
                          <li>
                            Negócios
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-team">
                      <img src="../app/src/images/equipe/gustavo.jpg" />
                      <div className="card-subtitle">
                        <ul>
                          <li>
                            Gustavo Oshiro
                          </li>
                          <li>
                            Ux / Desenvolvedor
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-team">
                      <img src="../app/src/images/equipe/leonardo.jpg" />
                      <div className="card-subtitle">
                        <ul>
                          <li>
                            Leonardo Ferreira
                          </li>
                          <li>
                            Trabalho de campo
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-team">
                      <img src="../app/src/images/equipe/vinicius.jpg" />
                      <div className="card-subtitle">
                        <ul>
                          <li>
                            Vinícius Arruda
                          </li>
                          <li>
                            Desenvolvedor
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
