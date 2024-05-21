import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';
import HomeRouter from './router/homeRouter';
import LandingPage from './page/landingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/*" Component={HomeRouter} />
        <Route path="/" Component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
