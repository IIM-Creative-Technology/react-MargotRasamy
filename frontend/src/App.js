import './assets/styles/main.scss';
import LoaderSpinner from './components/LoaderSpinner'
import LandingPage from './components/landingPage'

function App() {
  const loading = false
  return (
    <div className="App">
      {/* header to put here */}

      
      { !!loading
        ? <LoaderSpinner/>
        : <LandingPage />
      }

    </div>
  );
}

export default App;
