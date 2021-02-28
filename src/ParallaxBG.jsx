import './parallax-bg.css';
import './App.css';

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

          <div className="light-rays"></div>
          
          <div className="parallax__layer parallax__layer--deep">
            <div className="ridge1"></div>
            <div className="ridge2"></div>
            <div className="ridge3"></div>
          </div>

          <div className="background-container parallax__layer parallax__layer--sky">
            <div className="stars"></div>
            <div className="sun"></div>
            <div className="clouds"></div>
          </div>

        </div>

        {children}

      </div>

    </div>
  );
}