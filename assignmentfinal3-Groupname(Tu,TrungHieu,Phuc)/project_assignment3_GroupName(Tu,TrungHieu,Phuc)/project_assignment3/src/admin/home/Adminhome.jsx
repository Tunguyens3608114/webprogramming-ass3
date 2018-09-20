import React from 'react';
import Adminnavbar from '../navbar/Adminnavbar';
import { connect } from 'react-redux';

import {
    actFetchProjectsRequest, actFetchOwnProjectsRequest
    } from '../../action/projectsaction';

class  Adminhome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullNameProp: 'Adminstrator',
      emailProp   : 'admin@gmail.com',
      usernameProp: 'Admin',
      isLogined     : false,
    }
  }

  componentDidMount() {
     if (JSON.parse(localStorage.getItem('session')) ) {
        this.props.fetchOwnProjects(JSON.parse(localStorage.getItem('session')).username);
        var retrievedSession = JSON.parse(localStorage.getItem('session'));
        console.log('home page session:',retrievedSession);
        console.log('home session username:',JSON.parse(localStorage.getItem('session')).username)
      } else {
        this.props.fetchProjects();
      }
  }

  handleLogout() {
    var {history} = this.props
    localStorage.clear();
    history.replace("/Login");
  }
  render(){
    return (
        <div className="row">
            <div className='col-sm-3'>
               <Adminnavbar /> 
            </div>
            <aside className='col-sm-6 text-left'>
                <div className='contact'>
                    <div className='container-fluid'>
                        {JSON.parse(localStorage.getItem('session')) ?
                          <h1>Welcome {JSON.parse(localStorage.getItem('session')).fullName} to Admin Homepage</h1> :
                          <h1>Welcome {this.state.fullNameProp} to Admin Homepage</h1> 
                        }
                        <p>Administrator can search, create, update, delete posts and projects</p>
                        <p>Click <b>Posts</b> for post system</p>
                        <p>Click <b>Projects</b> for project system</p>   
                        <button className='btn btn-primary inline mr-1'
                          onClick={this.handleLogout.bind(this)}>
                          LOG OUT
                        </button>          
                    </div>
                </div>
            </aside>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
      fetchProjects: () => { dispatch(actFetchProjectsRequest()) },
      fetchOwnProjects: (username) => { dispatch(actFetchOwnProjectsRequest(username)) },
    }
};

export default connect(null,mapDispatchToProps)(Adminhome);