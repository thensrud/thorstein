import profile_picture from './images/thorstein_bw_transp.png';

import manIcon from './images/icons/man.png';
import gameConsoleIcon from './images/icons/game-console.png';
import musicIcon from './images/icons/musical-notes.png';
import thingsIcon from './images/icons/gadget.png';
import readIcon from './images/icons/read.png';

export const Home = () => {

  let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap sub-title">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === 'I like ') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
  };

  window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <>
      
      <div className="content">

        <div className="box-container">

          <div className="text-box welcome-box">
            <h1 className="title">Hi, I'm Thorstein :)</h1>
            <h2 className="sub-title">
              <a href="" class="typewrite" tabIndex="-1" data-period="2000" data-type='[ "I like making things.", "I like cats. And dogs. Never understood horses.", "I like you." ]'>
                <span class="wrap"></span>
              </a>
            </h2>
            
            <p className="text-box-paragraph">
              I made this site for fun, and as a place to collect and showcase some of my practice projects.
              <br/><br/>
              Above, you can see my home town, Rjukan, viewed more or less from the perspective of the house in which I grew up, made with CSS.
              You can read more about what I do and what I've done by clicking on the button below.
              <br/><br/>
              Coming soon.
            </p>
            <img src={manIcon} className="icon"></img>
            <div className="button-holder">
              <button className="button gradient-border">
                About me
              </button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Games</h1>
            <h2 className="sub-title">Made in JavaScript.</h2>
            <p className="text-box-paragraph">
              Coming soon.
            </p>
            <img src={gameConsoleIcon} className="icon"></img>
            <div className="button-holder">
              <button className="button gradient-border">Play</button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Music</h1>
            <h2 className="sub-title">Some good stuff.</h2>
            <p className="text-box-paragraph">
              Coming soon.
            </p>
            <img src={musicIcon} className="icon"></img>
            <div className="button-holder">
              <button className="button gradient-border">Listen</button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Cool things</h1>
            <h2 className="sub-title">Using APIs and whatnot.</h2>
            <p className="text-box-paragraph">
              Coming soon. Calm down.
            </p>
            <img src={thingsIcon} className="icon"></img>
            <div className="button-holder">
              <button className="button gradient-border">Try</button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Books & articles</h1>
            <h2 className="sub-title">Interesting stuff.</h2>
            <p className="text-box-paragraph">
              Coming soon. Jeeez.
            </p>
            <img src={readIcon} className="icon"></img>
            <div className="button-holder">
              <button className="button gradient-border">Read</button>
            </div>
          </div>

        </div>

        <div className="block1"></div>
        <div className="block2"></div>

      </div>

    </>
  );
}