import './assets/styles/main.scss'
import LandingPage from './components/landingPage/LandingPage'
import QuizPage from './components/quizPage/QuizPage'
import Header from './components/Header'
import React, { useRef } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Error404 from './components/Error404'

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
          <Route path='/404' exact={true} component={Error404} />
          <Redirect from='*' exact={true} to="/404" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
