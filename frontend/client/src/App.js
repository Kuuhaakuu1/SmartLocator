
import { Switch, Route,Router} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';


const history = createBrowserHistory();



function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <Login />
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
