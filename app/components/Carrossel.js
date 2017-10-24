import React, { Component } from 'react';

export default class Carrossel extends Component {
  render() {
    return (
      <div className="demo-2">

      <div id="slider" className="sl-slider-wrapper">
      <div className="container">
        <div className="header">
          <div className="navbar-brand logo">
            <img className="logo" src="../app/src/images/up-logo-header.png" />
          </div>
          <ul className="header-right">
            <li><a href="#sobre">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#novidades">Fique por dentro</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </div>

  <div className="sl-slider">

    <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
      <div className="sl-slide-inner">
        <div className="bg-img bg-img-1"></div>
        <h2>A bene placito.</h2>
        <blockquote><p>You have just dined, and however scrupulously the slaughterhouse is concealed in the graceful distance of miles, there is complicity.</p><cite>Ralph Waldo Emerson</cite></blockquote>
      </div>
    </div>

    <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
      <div className="sl-slide-inner">
        <div className="bg-img bg-img-2"></div>
        <h2>Regula aurea.</h2>
        <blockquote><p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p><cite>Albert Schweitzer</cite></blockquote>
      </div>
    </div>

    <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
      <div className="sl-slide-inner">
        <div className="bg-img bg-img-3"></div>
        <h2>Dum spiro, spero.</h2>
        <blockquote><p>Thousands of people who say they 'love' animals sit down once or twice a day to enjoy the flesh of creatures who have been utterly deprived of everything that could make their lives worth living and who endured the awful suffering and the terror of the abattoirs.</p><cite>Dame Jane Morris Goodall</cite></blockquote>
      </div>
    </div>

    <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
      <div className="sl-slide-inner">
        <div className="bg-img bg-img-4"></div>
        <h2>Donna nobis pacem.</h2>
        <blockquote><p>The human body has no more need for cows' milk than it does for dogs' milk, horses' milk, or giraffes' milk.</p><cite>Michael Klaper M.D.</cite></blockquote>
      </div>
    </div>

    <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1">
      <div className="sl-slide-inner">
        <div className="bg-img bg-img-5"></div>
        <h2>Acta Non Verba.</h2>
        <blockquote><p>I think if you want to eat more meat you should kill it yourself and eat it raw so that you are not blinded by the hypocrisy of having it processed for you.</p><cite>Margi Clarke</cite></blockquote>
      </div>
    </div>
  </div>

  <nav id="nav-dots" className="nav-dots">
    <span className="nav-dot-current"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </nav>

</div>
</div>
    );
  }
}
