import React, { useState, useEffect } from 'react'
import './App.css';
import { Home } from './home/home';
import { ParallaxBG } from './ParallaxBG';
import { LoadingScreen } from './LoadingScreen';

function App() {

  return (
    <>
      <ParallaxBG>
        <Home/>
      </ParallaxBG>
    </>
  );
}

/* function App() {

  const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(false)
    }, [])

  return (
    <> 
      {loading === false ? (
        <ParallaxBG>
          <Home/>
        </ParallaxBG>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
} */

export default App;