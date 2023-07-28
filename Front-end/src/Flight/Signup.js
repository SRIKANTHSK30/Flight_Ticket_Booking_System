import React, { useState } from 'react';
import '../Flight/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../Flight/video1.mp4';
import axios from 'axios';

const Login = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userError, setUserError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

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

  const validateForm = () => {
    if (!username) {
      setUserError('Please enter your name');
      return false;
    }

    if (!email) {
      setEmailError('Please enter your email.');
      return false;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return false;
    }

    
    return true;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post('http://localhost:8080/api/v1/auth/register', {
          userName: username,
          email: email,
          password: password,
        });
        setRegistrationSuccess(true); // Set registration success to true
        alert('Registration is SucessFull')
        setId('');
        setUsername('');
        setEmail('');
        setPassword('');

        navigate('/login');
      } catch (err) {
        alert('User Registration Failed');
      }
    }
  }

  return (
    <>
      <div className="wrapper33">
        <div className="inner33">
          <div className="image-holder33">
            <div className="gwi">
              <video className="videoTag" autoPlay loop muted>
                <source src={logo} type="video/mp4" />
              </video>
            </div>
          </div>
          <form action="">
            <h3>SIGN UP</h3>
            {registrationSuccess && (
              <p className="success-message" style={{ color: 'green' }}>
                Registration is Successful
              </p>
            )}
            <div className="form-wrapper33">
              <label>
                <h6> Username</h6>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
              {userError && (
                <p className="error-message" style={{ color: 'red' }}>
                  {userError}
                </p>
              )}
            </div>
            <br></br>
            <div className="form-wrapper33">
              <label>
                <h6>Email</h6>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="error-message" style={{ color: 'red' }}>
                  {emailError}
                </p>
              )}
            </div>
            <br></br>

            <div className="form-wrapper33">
              <label>
                <h6>Password</h6>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="error-message" style={{ color: 'red' }}>
                  {passwordError}
                </p>
              )}
              <br></br>
              <p className="text-center">
                Already have an Account? <a data-toggle="tab" href="/login">Login</a>
              </p>
              <br></br>
            </div>
            <button onClick={handleSubmit} type="submit">
              Sign up
            </button>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
