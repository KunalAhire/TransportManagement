import React, { useState, useContext} from 'react';
import { Link } from "react-router-dom";
import Context from '../context/Context';
import './login.css';
//import userData from "../Data/users.json"
import { useNavigate } from 'react-router';

const Login = () => {
  let navigate = useNavigate();
  const { userData } = useContext(Context)
  const [userDetails, setuserDetails] = useState({ email: '', password: '' });
  const onchange = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
    //console.log(userDetails);
  }
  const handleClick = () => {
    for(let i = 0 ;i < userData.length; i ++){
      if(userData[i].Email === userDetails.email || userData[i].Password === userDetails.password ){
        navigate('/mainpage')
        break
       }
       else 
       {alert('Invalid Credential')}
       break
    }
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={"truck.png"} className="img-fluid"alt='truck' />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" name='email' onChange={onchange} className="form-control form-control-lg" placeholder="Email address" />
                {/* <label className="form-label" htmlFor="form3Example3"></label> */}
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" name='password' onChange={onchange} className="form-control form-control-lg" placeholder="Password" />
                {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <a href="#0" className="text-body">Forgot password?</a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleClick} style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={'/register'} className="link-danger">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login