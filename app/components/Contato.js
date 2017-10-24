import React, { Component } from 'react';

export default class Contato extends Component {
  render() {
    return (
      <section id="contato">
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <label>
                Nome:
                <input type="text" name="name" />
              </label>
              <label>
                Assunto:
                <input type="text" name="name" />
              </label>
              <label>
                E-mail:
                <input type="email" name="name" />
              </label>
              <label>
                Mensagem:
                <input type="textarea" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
