import React, { useState } from "react";
import "./loginModal.css";
import LinkButton from "../Button";
import { useNavigate } from "react-router-dom";
import validateForm from "../validateForm";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// dummymodel

const LoginModal = ({ setLoginModalWindow, setValidLogin, loginModalWindow, hideMenu, validLogin, getUser }) => {
  

  const [validError, setValidError] = useState(null);


  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleSubmited = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/user/customerLogin",formData);

    if (!formData.email ) {
      setValidError('Please enter your email address');
      return
    } if (!formData.password){
      setValidError('Please enter your password');
      return
    }

    setValidError(null);

    if(response.status === 200) {
      localStorage.setItem('token', response.data.data.token)
      toast.success("Login success!");
      setFormData({
        email:"",
        password:""
      })
      setValidLogin(true)
      hideLoginModal();
    } else {
      setValidLogin(false)
    }

    console.log(response);
  }

  const hideLoginModal = () => {
    setLoginModalWindow(false);
  }

  return (
    <>
    <ToastContainer />
    <article className={`modal ${loginModalWindow ? 'active-modal' : null}`}>
      <section className="modal-main">
        <button
          className="close-modal-btn"
          type="button"
          onClick={() => {
            hideLoginModal();
          }}
        >
          X
        </button>
        <section className="modal-content">
          <h2>Log in</h2>
          
            <form>
              <input onChange={handleChange} value={formData.email} name="email" type="text" placeholder="Email" />
              {validError && !formData.password && <p className='error'>{validError}</p>}
              {/* <p className='error'> {validError ? 'Please enter your email address' : ''} </p> */}
              {/* {validError && !formData.email && <p className='error'>{validError}</p>} */}

              <input onChange={handleChange} value={formData.password} name="password" type="password" autoComplete="true" placeholder="Password" />
              {validError && !formData.password && <p className='error'>{validError}</p>}
              {/* <p className='error'> {validError ? 'Please enter your password' : ''} </p> */}
              {/* {validError && !formData.password && <p className='error'>{validError}</p>} */}


              
              <section className="login-and-signup">
                <LinkButton
                  onClick={() => {
                    hideLoginModal();
                    hideMenu();
                  }}
                  to="/register"
                  className="modal-signup-btn"
                >
                  Sign up
                </LinkButton>
                <button type="button" className="modal-login-btn" onClick={handleSubmited}>Log in</button>
              </section>
            </form>
         
        </section>
      </section>
    </article></>
  );
}

export default LoginModal;