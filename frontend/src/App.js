import './assets/styles/main.scss';
import LoaderSpinner from './components/LoaderSpinner'

function App() {
  const loading = false
  return (
    <div className="App">
      {/* header to put here */}

      
      { !!loading
        ? <LoaderSpinner/>
        : <h1> OtaQuiz</h1>
      }

    </div>
  );
}

export default App;
