import './assets/styles/main.scss';
import LoaderSpinner from './components/LoaderSpinner'
import LandingPage from './components/landingPage'
import Header from './components/Header'
import React, { useRef } from 'react';

function App() {
  const loading = false
  const app = useRef(null);
  return (
    <div className="App" ref={app}>
      {/* header to put here */}
      <Header />
      { !!loading
        ? <LoaderSpinner />
        : <LandingPage />
      }

    </div>
  );
}

export default App;
