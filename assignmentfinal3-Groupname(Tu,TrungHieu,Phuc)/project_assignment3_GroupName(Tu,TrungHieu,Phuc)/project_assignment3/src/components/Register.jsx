import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as Config from '../reducers/constants/Config';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: '',
      fullName: '',
      email   : '',

      usernameError: '',
      passwordError: '',
      fullNameError: '',
      emailError   : '',
    }
}

handleChange(e) {
  let change = {};
  change[e.target.name] = e.target.value;
  this.setState(change);
}

handleRegister = (e) => {
  const err = this.validate();
  var {history} = this.props

  if (err === true)
  {
    console.log('fail');
    history.replace("/Register");
  }
  else {
    var dataRegister = { 'username': this.state.username, 
                         'password': this.state.password, 
                         'fullName': this.state.fullName, 
                         'email'   : this.state.email };

    // // Put the object into storage
    // localStorage.setItem(this.state.username, JSON.stringify(dataRegister));

    // // Retrieve the object from storage
    // var retrievedDataRegister = localStorage.getItem(this.state.username);

    // console.log('retrievedDataRegister: ', JSON.parse(retrievedDataRegister));
    var register = axios.create({
      baseURL: Config.API_URL,
      timeout: 60000,
    });
    register.post('/registers', {
      username: this.state.username,
      password: this.state.password, 
      fullName: this.state.fullName, 
      email   : this.state.email
    }).then(function (response) {
      console.log('response:', response);
    });
    console.log(dataRegister);
    console.log('success, now we go to Login Page')
    history.replace("/Login");
  }
  // history.goBack();
}

validate = () =>{
  let isError = false;
  const errors = {
      usernameError:'',
      passwordError:'',    
      fullNameError: '',
      emailError   : '',
  };
  if (this.state.username === ''){
      isError = true;
      errors.usernameError = "Username must be not null";
  }
  if (this.state.password === ''){
      isError = true;
      errors.passwordError = "Password must be not null";
  }
  if (this.state.fullName === ''){
    isError = true;
    errors.fullNameError = "Full name must be not null";
  }
  if (this.state.email === ''){
    isError = true;
    errors.emailError = "Email must be not null";
  }
      this.setState({
           ...this.state,
           ...errors
      });
  return isError
}
render() {
    var {username, password, fullName, email} = this.state;
    return (
        <div className="row">

            <div className='col-sm-3'>
            </div>
            <aside className='col-sm-6 text-center'>
                <div className='contact'>
                    <div className='container-fluid'>
                      <br/>
                      <h1>Register Page</h1>
                      <br/><br/><br/>
                      <input
                        type='text' 
                        name='username' 
                        className='form-control' 
                        placeholder='Username'
                        value={username} onChange={this.handleChange.bind(this)} 
                      />
                      <div style={{color: "red"}} className="errorMsg">{this.state.usernameError}</div>
                      <br/>
                      <input
                        type='text' 
                        name='password' 
                        className='form-control' 
                        placeholder='Password'
                        value={password} onChange={this.handleChange.bind(this)} 
                      />
                      <div style={{color: "red"}} className="errorMsg">{this.state.passwordError}</div>
                      <br/>
                      <input
                        type='text' 
                        name='fullName' 
                        className='form-control' 
                        placeholder='Full name'
                        value={fullName} onChange={this.handleChange.bind(this)} 
                      />
                      <div style={{color: "red"}} className="errorMsg">{this.state.fullNameError}</div>
                      <br/>
                      <input
                        type='text' 
                        name='email' 
                        className='form-control' 
                        placeholder='Email'
                        value={email} onChange={this.handleChange.bind(this)} 
                      />
                      <div style={{color: "red"}} className="errorMsg">{this.state.emailError}</div>
                      <br/>
                      <button 
                            className='btn btn-primary inline mr-1'
                            onClick={this.handleRegister.bind(this)}>
                                Register
                        </button>
                        <br/>
                    </div>
                </div>
            </aside>
            <div className='col-sm-3'>
            </div>
        </div>
    );
  }
}

export default (Register);