import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firbase.init';

initializeAuthentication();

const Register = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false)

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth()
  
  const toogleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault()
    if (password.length < 6) {
      setError('Password should be at least 6 characters long')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Ensure password at least has two uppercase letters.')
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password)

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setError('')
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
  }


  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        verifyEmail()
        setError('')
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result.user)
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {

      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
  }
    return (
        <div>
            <div>
            <form onSubmit={handleRegistration}>
        <h3 className='text-primary'>Please  {isLogin ? 'Login' : 'Register'}</h3>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
            <div className='m-1'><p className='text-danger'>{error}</p></div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toogleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registerd?
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
        <button type='button' onClick={handleResetPassword} className='btn btn-secondary'>Reset Password</button>
      </form><br /> <br />
            </div>
            <p>Already Registered ? <Link to='/login'>Please Login</Link> </p>
        </div>
    );
};

export default Register;