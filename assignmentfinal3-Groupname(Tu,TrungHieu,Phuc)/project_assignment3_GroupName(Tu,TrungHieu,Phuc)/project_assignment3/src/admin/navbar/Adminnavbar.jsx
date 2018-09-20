import React from 'react';
import{
  Link
} from 'react-router-dom';

class  Adminnavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullNameProp: 'Adminstrator',
      emailProp   : 'admin@gmail.com',
      usernameProp: 'Admin',
      isLogined     : false,
    }
  }

render(){
  return (  
     <div className='container-fluid' >
      <div className="col-sm-9">
        { JSON.parse(localStorage.getItem('session')) ?
          JSON.parse(localStorage.getItem('session')).username :
          this.state.usernameProp
        }
       <br/><br/>
      </div>
      <nav className='col-sm-3 hidden-xs-down bg-faded sidebar'>
      <ul className='nav flex-column'>
            <li className='nav-item active'>
              <Link to ="/Adminhome" className="nav-link active" >Home</Link>
            </li>
            <li className='nav-item'>
            {JSON.parse(localStorage.getItem('session')) ?
              <Link to={{
                pathname: '/Adminpostlistpage',
                state: {
                  usernameProp: JSON.parse(localStorage.getItem('session')).username,
                  fullNameProp: JSON.parse(localStorage.getItem('session')).fullName,
                  emailProp   : JSON.parse(localStorage.getItem('session')).email,
                  isLogined   : true,}
                }}> MyPost
              </Link> :
              <Link to ="/Adminpostlistpage" className="nav-link" >Post</Link>
            }
            </li>
            <li className='nav-item'>
              {JSON.parse(localStorage.getItem('session'))?
                <Link to={{
                  pathname: '/Adminprojectlistpage',
                  state: {
                    usernameProp: JSON.parse(localStorage.getItem('session')).username,
                    fullNameProp: JSON.parse(localStorage.getItem('session')).fullName,
                    emailProp   : JSON.parse(localStorage.getItem('session')).email,
                    isLogined   : true,}
                  }}> MyProject
                </Link> :
                <Link to ="/Adminprojectlistpage" className="nav-link" >Project</Link>
              }
            </li>
        </ul>
        </nav>
      </div> 
    );
  }
}

export default Adminnavbar;

