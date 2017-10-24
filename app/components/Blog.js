import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    return (
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <div className="card-blog">
                  <img src="../app/src/images/equipe/vinicius.jpg" />
                  <div className="blog-legenda">
                    <span className="data">
                    24.10.2017
                    </span>
                    <span className="titulo">
                      Nova plataforma
                    </span>
                    <span className="descricao">
                      Fiquem ligados, estamos preparando uma nova plataforma para você!
                    </span>
                  </div>
                </div>
                <div className="card-blog">
                  <img src="../app/src/images/equipe/vinicius.jpg" />
                  <div className="blog-legenda">
                    <span className="data">
                    24.10.2017
                    </span>
                    <span className="titulo">
                      Nova plataforma
                    </span>
                    <span className="descricao">
                      Fiquem ligados, estamos preparando uma nova plataforma para você!
                    </span>
                  </div>
                </div>
                <div className="card-blog">
                  <img src="../app/src/images/equipe/vinicius.jpg" />
                  <div className="blog-legenda">
                    <span className="data">
                    24.10.2017
                    </span>
                    <span className="titulo">
                      Nova plataforma
                    </span>
                    <span className="descricao">
                      Fiquem ligados, estamos preparando uma nova plataforma para você!
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
