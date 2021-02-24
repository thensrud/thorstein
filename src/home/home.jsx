import profile_picture from './images/thorstein_bw_transp.png';

export const Home = () => {

  return (
    <>
      <div className="hero-div">
          <div className="hero-div-block-left">
              <h1 className="main-title">
                <span className="txt1">Hi :) I'm</span>
                <br/>
                <span className="txt2">Thorstein</span>
                <div className="bar"></div>
              </h1>
          </div>
          <div className="hero-div-block-right">
              <img className="profile-picture" src={profile_picture}/>
          </div>
      </div>
    </>
  );
}