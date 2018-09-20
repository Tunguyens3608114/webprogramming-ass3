
import React from 'react';
import{
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import './Assets/css/default.min.css';
import Header from './components/Header';

//document for user
import Home from './components/Home';
import Postpage from './user/userpost/Postpage';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Register from './components/Register';

// document for admin
import Adminhome from './admin/home/Adminhome';
// import Adminproductlistpage from './admin/adminproduct/Adminproductlistpage';
// import Adminproductactionform from './admin/adminproduct/Adminproductactionform';
// import Admincategorylistpage from './admin/admincategory/Admincategorylistpage';
// import Admincategoryactionform from './admin/admincategory/Admincategoryactionform';
// import Productdetail from './user/userproduct/Productdetail';

import Adminpostlistpage from './admin/adminpost/Adminpostlistpage';
import Adminpostactionform from './admin/adminpost/Adminpostactionform';
import Adminprojectlistpage from './admin/adminproject/Adminprojectlistpage';
import Adminprojectactionform from './admin/adminproject/Adminprojectactionform';
import Postdetail from './user/userpost/Postdetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu bar */}
            <div className='btn btn-primary outline mr-12'>
              <Header/>
              </div>
            <br/>
            <br/>
            {/* </nav>  */}
            {/* content menubar */}
              <div className='form-group'>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/Postpage" component={Postpage}/>
                  <Route path="/Postdetail/:id/detail" component={Postdetail}/> 
                  <Route path="/Adminhome" component={Adminhome}/>
                  <Route path="/Login" component={Login}/>
                  <Route path="/Register" component={Register}/>

                  <Route path="/Adminprojectlistpage/1" component={Adminprojectlistpage}/>
                  <Route path="/Adminprojectlistpage/:pageNo?" component={Adminprojectlistpage}/>
                  <Route path="/Adminprojectactionform/add" component={Adminprojectactionform}/>
                  <Route path="/Adminprojectactionform/:id/edit" component={Adminprojectactionform}/>

                  <Route path="/Adminpostlistpage/1" component={Adminpostlistpage}/>
                  <Route path="/Adminpostlistpage/:pageNo?" component={Adminpostlistpage}/>
                  <Route path="/Adminpostactionform/add" component={Adminpostactionform}/>
                  <Route path="/Adminpostactionform/:id/edit" component={Adminpostactionform}/> 

                  <Route path="" component={Notfound}/>
                </Switch>
              </div>
        </div>
      </Router>     
    );
  }
}

export default App;

{/*
  <Route path="/Productdetail/:id/detail" component={Productdetail}/> 
  <Route path="/Admincategorylistpage/1" component={Admincategorylistpage}/>
<Route path="/Admincategorylistpage/:pageNo?" component={Admincategorylistpage}/>
<Route path="/Admincategoryactionform/add" component={Admincategoryactionform}/>
<Route path="/Admincategoryactionform/:id/edit" component={Admincategoryactionform}/>

<Route path="/Adminproductlistpage/1" component={Adminproductlistpage}/>
<Route path="/Adminproductlistpage/:pageNo?" component={Adminproductlistpage}/>
<Route path="/Adminproductactionform/add" component={Adminproductactionform}/>
<Route path="/Adminproductactionform/:id/edit" component={Adminproductactionform}/>  */}
