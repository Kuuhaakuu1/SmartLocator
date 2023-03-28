import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import HomePage from './Pages/HomePage';

function App() {
  
    return(
            
      <div>
        <Router>

            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<HomePage/>}/>
            </Routes>

          </Router>
          
                
           
              
      </div>
  )
}

export default App;
