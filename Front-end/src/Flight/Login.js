import React, { useState } from 'react';
import '../Flight/Login.css'
import { useNavigate,Link, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login,logout} from '../features/userSlice'
import {useSelector} from 'react-redux';
import logo from '../Flight/video.mp4';
import axios from 'axios';

const Login = () => {

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userError, setUserError] = useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(state => state.user.value);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUserError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };


  async function handleSubmit(e) {
    e.preventDefault();


    if (!username) {
      setUserError('Please enter your name');
      return;
    }

    if (!email) {
      setEmailError('Please enter your email.');
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return;
    }
    console.log('Login submitted:', email, password);
    try
    {
      
       
      
     await axios.post("http://localhost:8080/api/v1/auth/authenticate",
    {
    
    userName:username,
    email:email,
    password:password
  
  
    });
    alert("Login is SucessFull");
      setId("");
      setUsername("");
     
      setEmail("");
      setPassword("");
      navigate('/nav');
      dispatch(login({ username,email }));
    
     
    
  }
  
  catch(err)
    {
      alert("User Registation Failed");
    }
  };
  


    return (
    <>
   
<div class="wrapper33" >
<div class="inner33">
<div class="image-holder33">
<div class="gwi">
               <video className='videoTag' autoPlay loop muted>
                     <source src={logo} type='video/mp4' />
               </video>
            </div>
</div>
<form>
<h3>LOGIN</h3>
<div class="form-wrapper33">
  <label><h6> Username</h6></label>
<input type="text" placeholder="Username" class="form-control" id='username'
                value={username}
                onChange={handleUsernameChange}/>
                  {userError && <p className="error-message" style={{ color: 'red' }}>{userError}</p>}
 
</div><br></br>
<div class="form-wrapper33">
<label><h6>Email</h6></label>
<input type="text" placeholder="Email Address" class="form-control"  id='email'
                value={email}
                onChange={handleEmailChange}/>
                 {emailError && <p className="error-message" style={{ color: 'red' }}>{emailError}</p>}

</div><br></br>

<div class="form-wrapper33">
<label><h6>Password</h6></label>
<input type="password" placeholder="Password" class="form-control"   id='password'
                value={password}
                onChange={handlePasswordChange}/>
{passwordError && <p className='error-message' style={{ color: 'red' }}>{passwordError}</p>}<br></br>
<p class="text-center">Not a member? <a data-toggle="tab" href="/">Sign Up</a></p><br></br>
</div><button onClick={handleSubmit} type="submit" >Log In</button><br></br>



</form>
</div>
</div>
    </>
  );
};

export default Login;