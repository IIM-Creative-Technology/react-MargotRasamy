import './assets/styles/main.scss';
import LandingPage from './components/landingPage/LandingPage'
import QuizPage from './components/quizPage/QuizPage'
import Header from './components/Header'
import React, { useRef } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const app = useRef(null);
  return (
    <BrowserRouter>
      <div className="App" ref={app}>
        <Header />
        <Switch>
          <Route exact path="/challenge-expert" component={LandingPage} />
          <Route path="/quiz/:manga" component={QuizPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
