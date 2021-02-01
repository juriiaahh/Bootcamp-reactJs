import React from 'react'
import '../assets/css/styles.css';
import '../assets/css/login.css';
import login from '../assets/img/login2.PNG';

export default function Register(){
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
                                <h5 className="text-center font-weight-bold">Register</h5>
                                <div className="row p-2">
                                    <label for="name" className="col-md-4 col-form-label text-md-left font-weight-bold">Name</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" id="name" placeholder="name" name="name"/>
                                    </div>
                                </div>
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

                                <div className="row p-2">
                                    <label for="number" className="col-md-4 col-form-label text-md-left font-weight-bold">No. Hp</label>
                                    <div className="col-md-8">
                                        <input type="number" className="form-control" id="number" placeholder="no.hp" name="number"/>
                                    </div>
                                </div>

                                <div className="row p-2">
                                    <label for="alamat" className="col-md-4 col-form-label text-md-left font-weight-bold">Alamat</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" id="alamat" placeholder="alamat" name="alamat"/>
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-4 p-2">
                                    <button type="submit" onClick={handleSubmit} className="font-weight-bold btn btn-color">Sign Up</button>
                                </div>
                                <div className="col-md-12 p-2">
                                    <div className="links">
                                        Don't have an account?<a href="#"> Login Now!</a>
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