import './assets/styles/main.scss';
import LoaderSpinner from './components/LoaderSpinner'
import LandingPage from './components/landingPage'
import QuizPage from './components/quizPage'
import Header from './components/Header'
import React, { useRef } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const loading = false
  const app = useRef(null);
  return (
    <BrowserRouter>
      <div className="App" ref={app}>
        <Header />
        {/* { !!loading
          ? <LoaderSpinner />
          : <Route exact path="/">
              <LandingPage />
            </Route>
        } */}
        <Switch>
          <Route exact path="/challenge-expert">
            <QuizPage />
          </Route>
          <Route path="/quiz/:manga" component={QuizPage}>
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
