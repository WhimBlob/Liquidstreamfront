import React, {useState} from 'react';
import axios from 'axios';

function Registration() {
  const [state, setState] = useState({
    username: '',
    password: '',
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
    if(state.username.length && state.password.length) {
        const payload={
            "username":state.username,
            "password":state.password,
        }
        axios.post('http://localhost:5000/users/signup', payload)
            .then(function (response) {
              console.log('Connected')
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful.'
                    }))
                    localStorage.setItem('username', state.logusername);
                    console.log(localStorage);
                }
            })
            .catch(function (error) {
                console.log(error);
            });    
    }
    
  }
  return(
    <form id="reg-form">
      <input type="text" autoComplete="off" id="username" placeholder="Username" value={state.username} onChange={handleChange} />
      <input type="password" autoComplete="off" id="password" placeholder="Password" value={state.password} onChange={handleChange}/>
      <input type="submit" value="Submit Form" onClick={handleSubmitClick} />
    </form>
  )
}

export default Registration;



