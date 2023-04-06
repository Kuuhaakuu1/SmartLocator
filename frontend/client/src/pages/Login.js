
import React,{ useState } from "react";
import logo from './Smart.jpg';
import '../App.css';

import { useHistory, } from 'react-router-dom';



function Login() {

  
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const login = async (e) => {
    e.preventDefault();
    
    
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        username,
        password,
      }),
      
    });
  
    if (!response.ok) {
      alert("Failed to submit form");
    }else{
      console.log("form submitted");
      history.push('/home');
    }
  };
  


/* const validationSchema=yup.object().shape({
  email: yup.string().min(0).max(25).required('field required'),
  password :yup.string().min(0).max(90).required('field required'),
 
}) */


  return (
    <div className="App">
     
     <form onSubmit={login}>
     <div className="App1">
     <h1 className="siign">*** SIGN-IN *** </h1>
     <img src={logo} className="App1-logo" alt="logo" />
       
       
        
           <input
              type="email"
              name="username"
              className=" App1-input form-control"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="false"
            />
          <a href="/" className="Link1">Forgot password</a>
        
          
          <input
              type="password"
              name="password"
              className="App1-input2 form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          <p className="para">Don't have an account?</p>
          <a href="/SignUp" className="Link">Create account</a>
        <button className="App1-button" type="submit" value="Login">LOGIN</button>
      </div>
    </form>
     
     
     
     
   
    </div>
    
  );
}

export default Login;
