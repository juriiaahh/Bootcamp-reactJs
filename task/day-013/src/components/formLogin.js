import React from 'react';
import useForm from './useForm';
import validate from './loginFormValidationRules';
import login from '../assets/img/login2.PNG';
import '../assets/css/styles.css';
import '../assets/css/login.css';

const styles = {
    img: {
      backgroundImage:  `url(${login})`,
      height: '100vh',
      width:'100%',
      backgroundPosition: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    },
  }

const FormLogin = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
      alert("success");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <div className="container">
            <div className="col-sm-12 col-md-12" style={styles.img}>
                <div className="row no-gutters">
                    <div className="col-sm-12 col-md-4 center">
                        <div className="card-login">
                            <div className="card-body">
                                <h5 className="text-center label">Sign In</h5>
                                <div className="row">
                                    <label for="email" className="col-md-4 col-form-label text-md-left">Email</label>
                                    <div className="col-md-12">
                                    <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                                        {errors.email && (
                                            <p className="help is-danger">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="row">
                                    <label for="password" className="col-md-4 col-form-label text-md-left">Password</label>
                                    <div className="col-md-12">
                                    <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                                        {errors.password && (
                                        <p className="help is-danger">{errors.password}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="offset-md-6 p-3 text-right">
                                    <button type="submit" className="btn btn-color">Login</button>
                                </div>
                                <div className="col-md-12">
                                    <div className="links">
                                        Don't have an account?<a href="#register"> Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
  );
};

export default FormLogin;