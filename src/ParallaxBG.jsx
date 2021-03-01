import './parallax-bg.css';
import './App.css';

import lightrays from './home/images/light-rays.png';
import clouds from './home/images/clouds.png';

export const ParallaxBG = ({children}) => {
  return (
    <div id="parallax-container"> 

      <div className="parallax">
        
        <div id="group4" className="parallax__group">

          <div className="parallax__layer parallax__layer--base">
            <div className="scroll-down-left">&darr;</div>
            <div className="scroll-down-right">&darr;</div>
          </div>

          <div className="parallax__layer parallax__layer--back">
          </div>

          <div className="parallax__layer parallax__layer--town">
          </div>

          <div className="parallax__layer parallax__layer--town2">
          </div>

          <img className="light-rays" src={lightrays}></img>
          
          <div className="parallax__layer parallax__layer--deep">
            <div className="ridge1"></div>
            <div className="ridge2"></div>
            <div className="ridge3"></div>
          </div>

          <div className="background-container parallax__layer parallax__layer--sky">
            <img className="stars" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png"></img>
            <div className="sun"></div>
            <img className="clouds" style={{ backgroundImage: `url(${clouds})` }}></img>
          </div>

        </div>

        {children}

      </div>

    </div>
  );
}