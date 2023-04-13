import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import Login from "./Pages/Login";
// import HomePage from './Pages/HomePage';
import Profile from "./Pages/Profile";
// import QrFetcher from "./Pages/QrFetcher";
import Info from "./Pages/Info";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
                <Route exact path="/" element={<Login />}/>
                <Route exact path="/profile" element={<Profile/>}/>
                {/* <Route exact path="/home" element={<HomePage/>}/> */}
                {/* <Route exact path="/QrFetcher" element={<QrFetcher/>}/> */}
                <Route exact path="info" element={<Info/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
