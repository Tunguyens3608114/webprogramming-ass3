import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Config from '../reducers/constants/Config';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: '',
      usernameError: '',
      passwordError:'',
    }
}

handleChange(e) {
  let change = {};
  change[e.target.name] = e.target.value;
  this.setState(change);
}

handleLogin = (e) => {
  const err = this.validate();
  var {history} = this.props

  if (err === true)
  {
    console.log('fail');
    history.replace("/Login");
  }
  else {
    var login = axios.create({
      baseURL: Config.API_URL,
      timeout: 60000,
    });
    login.post('/registers/login', {
      username: this.state.username,
    }).then(function (response) {
        // // Put the object into storage
    var Session = { 
        'username': response.data.username, 
        'fullName': response.data.fullName, 
        'email'   : response.data.email,
        '_id'     : response.data._id
      };
    localStorage.setItem('session', JSON.stringify(Session));

    // // Retrieve the object from storage
      var retrievedSession = JSON.parse(localStorage.getItem('session'));

      console.log('retrievedSession: ', retrievedSession);
      console.log('success, now we go to Admin Home Page')
      history.replace({
        pathname: '/Adminhome',
      })
    });

  }
  // history.goBack();
}
validate = () =>{
  let isError = false;
  const errors = {
      usernameError:'',
      passwordError:'',    
  };
  if (this.state.username === '') {
      isError = true;
      errors.usernameError = "Username must be not null";
  }
  if (this.state.password === ''){
      isError = true;
      errors.passwordError = "Password must be not null";
  }
 
      this.setState({
           ...this.state,
           ...errors
      });
 
  return isError
}

    render() {
    var {username, password} = this.state;
    return (
        <div className="row">

            <div className='col-sm-3'>
            </div>
            <aside className='col-sm-6 text-center'>
                <div className='contact'>
                    <div className='container-fluid'>
                      <br/>
                      <h1>Login Page</h1>
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
                    </div>
                    <button 
                            className='btn btn-primary inline mr-1'
                            onClick={this.handleLogin.bind(this)}>
                              Login
                      </button>
                      <br/>
                      <br/>
                      <Link
                            to = "/Register"
                            className='btn btn-primary mr-1'>
                            You dont have account 
                      </Link>
                </div>
            </aside>
            <div className='col-sm-3'>
            </div>
        </div>
    );
}
}

export default (Login);