import React from 'react';
import useForm from './useForm';
import validateRegister from './registerFormValidationRules';
import login from '../assets/img/login2.PNG';
import '../assets/css/styles.css';
import '../assets/css/login.css';
import {useHistory, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

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

const FormRegister = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validateRegister);

  function login() {
      alert("Success");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <div className="container">
            <div className="col-sm-12 col-md-12" style={styles.img}>
                <div className="row no-gutters">
                    <div className="col-sm-12 col-md-4 center-signup">
                        <div className="card-login">
                            <div className="card-body">
                                <h5 className="text-center label">Sign Up</h5>
                                <div className="row p-1">
                                    <label for="name" className="col-md-4 col-form-label text-md-left">Name</label>
                                    <div className="col-md-8">
                                    <input autoComplete="off" className={`input ${errors.name && 'is-danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                                        {errors.name && (
                                            <p className="help is-danger">{errors.name}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="row p-1">
                                    <label for="email" className="col-md-4 col-form-label text-md-left">Email</label>
                                    <div className="col-md-8">
                                    <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                                        {errors.email && (
                                            <p className="help is-danger">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="row p-1">
                                    <label for="password" className="col-md-4 col-form-label text-md-left">Password</label>
                                    <div className="col-md-8">
                                    <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                                        {errors.password && (
                                        <p className="help is-danger">{errors.password}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="row p-1">
                                    <label for="number" className="col-md-4 col-form-label text-md-left">No.Hp</label>
                                    <div className="col-md-8">
                                    <input autoComplete="off" min='0' className={`input ${errors.number && 'is-danger'}`} type="number" name="number" onChange={handleChange} value={values.number || ''} required />
                                        {errors.number && (
                                            <p className="help is-danger">{errors.number}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="row p-1">
                                    <label for="alamat" className="col-md-4 col-form-label text-md-left">Alamat</label>
                                    <div className="col-md-8">
                                    <input autoComplete="off" className={`input ${errors.alamat && 'is-danger'}`} type="alamat" name="alamat" onChange={handleChange} value={values.alamat || ''} required />
                                        {errors.alamat && (
                                            <p className="help is-danger">{errors.alamat}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="offset-md-6 text-right">
                                    <button type="submit" className="btn btn-color-login"  style={{backgroundColor:'#851c50', color:'white'}}>Sign Up</button>
                                </div>
                                <div className="col-md-12">
                                    <div className="links">
                                        Don't have an account?<Link to="/"> Sign In!</Link>
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

export default FormRegister;