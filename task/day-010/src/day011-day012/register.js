import React from 'react'
import '../assets/css/styles.css';
import '../assets/css/login.css';
import login from '../assets/img/login2.PNG';

    const styles = {
        img: {
          backgroundImage:  `url(${login})`,
          height: '100vh',
          backgroundPosition: 'relative',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          margin: 0, 
        },
      }

    class Register extends React.Component {
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
            input["name"] = "";
            input["email"] = "";
            input["password"] = "";
            input["number"] = "";
            input["alamat"] = "";
            this.setState({input:input});
    
            alert('Form is submited');
        }
      }
    
    
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;

            if (!input["name"]) {
                isValid = false;
                errors["name"] = "Please enter your name.";
            }
    
            if (!input["email"]) {
                isValid = false;
                errors["email"] = "Please enter your email Address.";
            }
    
            if (typeof input["email"] !== "undefined") {
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
                }
            }

            if (!input["password"]) {
                isValid = false;
                errors["password"] = "Please enter your password.";
    
            }
            if (!input["number"]) {
                isValid = false;
                errors["number"] = "Please enter your number.";
    
            }
            
            if (!input["alamat"]) {
                isValid = false;
                errors["alamat"] = "Please enter your alamat.";
    
            }
            
            this.setState({
                errors: errors
            });
            return isValid;
        }
         
    render(){

    return(
        <form onSubmit={this.handleSubmit}>
        <div className="container">
            <div className="row no-gutters">
                <div className="col-sm-12 col-md-12" style={styles.img}>
                    <div className="col-sm-12 col-md-6 center">
                        <div className="card-login">
                            <div className="card-body">
                                <h5 className="text-center">Sign Up</h5>
                                <div className="row p-2">
                                    <label for="name" className="col-md-2 col-form-label text-md-left">Name</label>
                                    <div className="col-md-10">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={this.state.input.name}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Enter name" 
                                            id="name" />
                                            <div className="text-danger">{this.state.errors.name}</div>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <label for="email" className="col-md-2 col-form-label text-md-left">Email</label>
                                    <div className="col-md-10">
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
                                    <label for="password" className="col-md-2 col-form-label text-md-left">Password</label>
                                    <div className="col-md-10">
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

                                <div className="row p-2">
                                    <label for="number" className="col-md-2 col-form-label text-md-left">No.Hp</label>
                                    <div className="col-md-10">
                                        <input 
                                            type="number" 
                                            name="number" 
                                            value={this.state.input.number}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Enter number" 
                                            id="number" />
                                            <div className="text-danger">{this.state.errors.number}</div>
                                    </div>
                                </div>

                                <div className="row p-2">
                                    <label for="alamat" className="col-md-2 col-form-label text-md-left">Alamat</label>
                                    <div className="col-md-10">
                                        <input 
                                            type="alamat" 
                                            name="alamat" 
                                            value={this.state.input.alamat}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Enter alamat" 
                                            id="alamat" />
                                            <div className="text-danger">{this.state.errors.alamat}</div>
                                    </div>
                                </div>

                                <div className="offset-md-6 p-2 text-right">
                                    <button type="submit" className="font-bold btn btn-color">Sign Up</button>
                                </div>
                                <div className="col-md-12">
                                    <div className="links">
                                        Don't have an account?<a href="#"> Sign In!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}
}
export default Register;