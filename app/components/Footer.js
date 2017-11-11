import React, { Component } from 'react';

export default class Plataforma extends Component {
  render() {
    return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="block">
                          <p>Copyright &copy; <a href="https://www.uplant.com.br">Uplant</a>2017 | All right reserved.</p>
                      </div>
                      <div className="social-footer">
                        <a href="" target="_blank"><i className="fa fa-facebook"></i></a>
                        <a href="" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href="" target="_blank"><i className="fa fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}
