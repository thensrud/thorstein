import profile_picture from './images/thorstein_bw_transp.png';

import manIcon from './images/icons/man.png';
import gameConsoleIcon from './images/icons/game-console.png';
import musicIcon from './images/icons/musical-notes.png';
import thingsIcon from './images/icons/gadget.png';
import readIcon from './images/icons/read.png';

export const Home = () => {

  return (
    <>
      
      <div className="content">

        <div className="box-container">

          <div className="text-box welcome-box">
            <h1 className="title">Hi, I'm Thorstein :)</h1>
            <h2 className="sub-title">I like making things.</h2>
            <img src={manIcon} className="icon"></img>
            <p className="text-box-paragraph">
              I made this site for fun, and as a place to collect and showcase some of my practice projects.
              <br/><br/>
              Above, you can see my home town, Rjukan, viewed more or less from the perspective of the house in which I grew up.
              You can read more about what I do and what I've done by clicking on this "about me"-button:
              <br/><br/>
              Coming soon.
            </p>
            <div className="button-holder">
              <button className="button gradient-border">
                About me
              </button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Games</h1>
            <h2 className="sub-title">Made in JavaScript.</h2>
            <img src={gameConsoleIcon} className="icon"></img>
            <p className="text-box-paragraph">
              Coming soon.
            </p>
            <div className="button-holder">
              <button className="button gradient-border">Games</button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Music</h1>
            <h2 className="sub-title">Some good stuff.</h2>
            <img src={musicIcon} className="icon"></img>
            <p className="text-box-paragraph">
              Coming soon.
            </p>
            <div className="button-holder">
              <button className="button gradient-border">Music</button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Cool things</h1>
            <h2 className="sub-title">Using APIs and whatnot.</h2>
            <img src={thingsIcon} className="icon"></img>
            <p className="text-box-paragraph">
              Coming soon. Calm down.
            </p>
            <div className="button-holder">
              <button className="button gradient-border">COOL THINGS</button>
            </div>
          </div>

          <div className="text-box">
            <h1 className="title">Books and articles</h1>
            <h2 className="sub-title">Interesting stuff.</h2>
            <img src={readIcon} className="icon"></img>
            <p className="text-box-paragraph">
              Coming soon. Jeeez.
            </p>
            <div className="button-holder">
              <button className="button gradient-border">Blog</button>
            </div>
          </div>

        </div>

        <div className="block1"></div>
        <div className="block2"></div>

      </div>

    </>
  );
}