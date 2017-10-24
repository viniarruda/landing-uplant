import React, { Component } from 'react';

var videoStyle = {
  border: 'none'
};

export default class Sobre extends Component {
  render() {
    return (
      <section id="sobre">
        <div className="container">
          <div className="row">
          <div className="col-md-12 container-sobre">
            <div className="grid-sobre col-md-6 left">
              <h2>Nos conheça</h2>
              <p>Investir no segmento agrícola é uma das mais tradicionais formas de rentabilização de patrimônio, e há inumeras formas de investimento neste setor. Entretanto, os maiores lucros do segmento agrícola sempre foram restritos ao grandes produtores rurais - grande latifundiarios, que aplicavam seus recursos em tecnologia e grandes safras. O Uplant é uma plataforma de investimento agrícola que quebra esse paradigma, utilizando conceito de crowdfunding para tornar estes investimentos acesíveis a todos e dar acesso aos pequenos produtores rurais, recursos financeiros para sua produção agrícola.</p>
              <p>Através do UPLANT, investidores podem participar de empreendimentos agerícolas de pequenos e médios produtores rurais previamente selecionados. A partir de R$1 mil, o investidor pode adquirir uma quota da produção, de forma 100% digital, sem burocracia e com alto potencial de retorno.</p>
              <p>Nós do UPLANT acreditamos que nenhum portfolio de investimentos está completo enquanto não possuir uma parcela alocada no segmento agrícola, e temos orgulho em oferecer um forma simplificada e rentável de investir neste mercado.</p>
            </div>
            <div className="grid-sobre col-md-6 right">
                  <iframe id="frame" width="500" height="315" style={videoStyle} src="https://www.youtube.com/embed/oDkYTJ3cQjY"></iframe>
            </div>
          </div>
          </div>
        </div>  
      </section>
    );
  }
}
