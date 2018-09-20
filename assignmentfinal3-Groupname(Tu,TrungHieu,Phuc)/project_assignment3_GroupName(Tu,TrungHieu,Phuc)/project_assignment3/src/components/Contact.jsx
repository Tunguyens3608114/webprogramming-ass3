import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className="container">
          <h1>About My Project</h1>
          <p>The project is an assignments of RMIT University (Information Technology). </p>
          <br />
          <p><b>Name</b>: Nguyen Trung Hieu</p>
          <p><b>Student ID</b>: S3479766</p>
          <b>---------------------------</b>
          <p><b>Name</b>: Nguyen Xuan Hoang Phuc</p>
          <p><b>Student ID</b>: S3595035</p>
          <b>---------------------------</b>
          <p><b>Name</b>: Tu Nguyen</p>
          <p><b>Student ID</b>: S3608114</p>
          <p><b>Tasks:</b></p>
          <ul>
            <li>Developing: Estate portal</li>
            <li>Software: CSS, Bootstrap, visual studio code...</li>
            <li>Server: https://rmitnumberone.herokuapp.com</li>
          </ul>
        </div>
      </div>
    );
  };
}
export default Contact;


// if (JSON.parse(localStorage.getItem('session')) ) {
//   var username = JSON.parse(localStorage.getItem('session')).username;
// }
// var postSave = {
//   id: this.state.id,
//   title: this.state.name,
//   price: this.state.nameError,
//   area: this.state.nameProject,
//   numberBedroom: this.state.numberBedroom,
//   numberFloor: this.state.numberFloor,
//   direction: this.state.direction,
//   contactPhone: this.state.contactPhone,
//   address: this.state.address,
//   postDate: this.state.postDate,
//   expiredDate: this.state.expiredDate,
//   username: username,
// }
