import React, {useState} from 'react';
import axios from 'axios';

function Login() {
  const [state, setState] = useState({
    logusername: '',
    logpassword: '',
  })
  const handleChange = (e) => {
    const {id, value} = e.target
    setState(prevState => ({
      ...prevState,
      [id] : value
    }))
  }
  const handleSubmitClick = () => {
    sendDetailsToServer()
  }
  const sendDetailsToServer = () => {
    if(state.logusername.length && state.logpassword.length) {
        const payload={
            "username":state.logusername,
            "password":state.logpassword,
        }
        axios.post('http://localhost:5000/users/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful.'
                    }))
                  localStorage.setItem('username', state.logusername);
                  console.log(localStorage)
                }
            })
            .catch(function (error) {
                console.log(error);
            });    
    }
    
  }
  return(
    <form id="login">
      <input type="text" autoComplete="off" id="logusername" placeholder="Username" value={state.logusername} onChange={handleChange} />
      <input type="password" autoComplete="off" id="logpassword" placeholder="Password" value={state.logpassword} onChange={handleChange}/>
      <input type="submit" value="Submit Form" onClick={handleSubmitClick} />
    </form>
  )
}

export default Login;



