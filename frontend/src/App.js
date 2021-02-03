import './assets/styles/main.scss';
import LoaderSpinner from './components/LoaderSpinner'

function App() {
  const loading = false
  return (
    <div className="App">
      <header className="App-header">
        { !!loading
         ? <LoaderSpinner/>
         : null
        }

      </header>
    </div>
  );
}

export default App;
