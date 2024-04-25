import React, { useEffect, useState } from "react";
import validateForm from "../../components/validateForm";
import { v4 as uuidv4 } from 'uuid';
import ResetLocation from "../../helpers/ResetLocation";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    phone:""
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
    const response = await axios.post("http://localhost:3001/user/customerregister",formData);
    if(response.status === 200) {
      toast("Registration success!");
      setFormData({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        phone:""
      })
    }
    console.log(response);
  }
  
  return (
    <main className="register-main">
      <ToastContainer />
      
      <form className="registration-form">
        <h1> Register </h1>
        {/* {registrationFail ? <p className="registration-input-err">Seems like this email has already been registered!</p> : null} */}
        <section className="name-section">
          <input type="text" placeholder="First name" name="first_name" value={formData.first_name}
            onChange={handleChange} />
          {/* <span className="registration-input-err">{formError.firstname}</span> */}
        </section>
        <section className="name-section">
          <input type="text" placeholder="Last name" name="last_name" value={formData.last_name}
            onChange={handleChange} />
          {/* <span className="registration-input-err">{formError.lastname}</span> */}
        </section>
        <section className="email-section">
          <input type="text" placeholder="Email" name="email" value={formData.email}
            onChange={handleChange} />
          {/* <span className="registration-input-err">{formError.email}</span> */}
        </section>

        <section className="password-section">
          <input type="text" placeholder="Password" name="password" value={formData.password}
            onChange={handleChange} />
          {/* <span className="registration-input-err">{formError.password}</span> */}
        </section>
        
        <section className="birthday">
          <input type="text" placeholder="Phone Number" name="phone" value={formData.phone}
            onChange={handleChange} />
          {/* <span className="registration-input-err">{formError.number}</span> */}
        </section>

        <p className="terms-warning">
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
          Policy. You may receive an email notification from us and can opt
          out any time.
        </p>

        <button className="register-btn" type="button" onClick={handleSubmited}>Sign up</button>
        </form>

    </main>
  );
}


export default Register;