import React, { Component } from 'react';

export default class Somos extends Component {
  render() {
    return (
      <section id="somos">
        <div className="container">
          <div className="row">
            <div className="equipe">
              <div className="card-equipe">
                <img src="../app/src/images/equipe/gabriel.jpg" />
                <div className="card-legenda">
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
              <div className="card-equipe">
                <img src="../app/src/images/equipe/guilherme.jpg" />
                <div className="card-legenda">
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
              <div className="card-equipe">
                <img src="../app/src/images/equipe/gustavo.jpg" />
                <div className="card-legenda">
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
              <div className="card-equipe">
                <img src="../app/src/images/equipe/leonardo.jpg" />
                <div className="card-legenda">
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
              <div className="card-equipe">
                <img src="../app/src/images/equipe/vinicius.jpg" />
                <div className="card-legenda">
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
