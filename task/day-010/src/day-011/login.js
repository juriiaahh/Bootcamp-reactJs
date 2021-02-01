import React from 'react'
import '../assets/css/styles.css';
import '../assets/css/login.css';
import login from '../assets/img/login2.PNG';

export default function Login(){
    const styles = {
        img: {
          backgroundImage:  `url(${login})`,
          height: '100vh',
          backgroundPosition: 'absolute',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
      }

      const handleSubmit = () => {
        console.log("button submit");
      }

    return(
        <div className="container">
            <div className="row no-gutters">
                <div className="col-sm-12 col-md-12 demo_wrap" style={styles.img}>
                    <div className="col-sm-12 col-md-4 center">
                        <div className="card-login">
                            <div className="card-body">
                                <h5 className="text-center font-weight-bold">Sign in</h5>
                                <div className="row p-2">
                                    <label for="email" className="col-md-4 col-form-label text-md-left font-weight-bold">Email</label>
                                    <div className="col-md-8">
                                        <input type="email" className="form-control" id="email" placeholder="email" name="email"/>
                                    </div>
                                </div>

                                <div className="row p-2">
                                    <label for="password" className="col-md-4 col-form-label text-md-left font-weight-bold">Password</label>
                                    <div className="col-md-8">
                                        <input type="password" className="form-control" id="pwd" placeholder="password" name="pwd"/>
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-4 p-2">
                                    <button type="submit" onClick={handleSubmit} className="font-weight-bold btn btn-color">Login</button>
                                </div>
                                <div className="col-md-12 p-2">
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
    )
}