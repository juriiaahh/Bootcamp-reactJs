import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/login.css';
import login from '../assets/img/login.PNG';


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
  
class Login extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});

        alert('Form is submited');
    }
  }


  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";

        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
            }
        }

        this.setState({
            errors: errors
        });
        return isValid;
    }
     

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="container">
                    <div className="col-sm-12 col-md-12" style={styles.img}>
                <div className="row no-gutters">
                        <div className="col-sm-12 col-md-4 center">
                            <div className="card-login">
                                <div className="card-body">
                                    <h5 className="text-center">Sign In</h5>
                                    <div className="row p-2">
                                        <label for="email" className="col-md-4 col-form-label text-md-left">Email</label>
                                        <div className="col-md-8">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                value={this.state.input.email}
                                                onChange={this.handleChange}
                                                class="form-control" 
                                                placeholder="Enter email" 
                                                id="email" />
                                                <div className="text-danger">{this.state.errors.email}</div>
                                        </div>
                                    </div>

                                    <div className="row p-2">
                                        <label for="password" className="col-md-4 col-form-label text-md-left">Password</label>
                                        <div className="col-md-8">
                                            <input 
                                                type="password" 
                                                name="password" 
                                                value={this.state.input.password}
                                                onChange={this.handleChange}
                                                class="form-control" 
                                                placeholder="Enter password" 
                                                id="password" />
                                                <div className="text-danger">{this.state.errors.password}</div>
                                        </div>
                                    </div>

                                    <div className="offset-md-6 p-2 text-right">
                                        <button type="submit"  className="btn btn-color">Login</button>
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
        </form>
    );
  }
}

export default Login;
