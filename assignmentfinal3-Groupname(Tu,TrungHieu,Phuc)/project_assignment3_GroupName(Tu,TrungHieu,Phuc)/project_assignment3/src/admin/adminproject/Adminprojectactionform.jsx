import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isUndefined from "is-undefined";

import {
  actAddProjectRequest, actGetProjectRequest, actUpdateProjectRequest,
} from '../../action/projectsaction';

class Adminprojectactionform extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      nameError: '',
      nameProject: '',
      typeOfProject: '',
      totalArea: '',
      startYear: '',
      endYear: '',
      username: 'admin',
    };
  }

  componentDidMount() {
   // console.log(JSON.parse(localStorage.getItem('session')).username)
    //  this.props.fetchProjects();
    if (JSON.parse(localStorage.getItem('session')) ) {
      this.setState({
        owner: JSON.parse(localStorage.getItem('session')).fullName,
        username: JSON.parse(localStorage.getItem('session')).username,
      })
    }
    // var {history} = this.props;
    // var id = history.location.pathname.split("/")[2];
    // if(id === "add") {
    //   id = ""
    // }
    // // this.setState({
    // //   id: id
    // // })
    // console.log("id:", id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editProjects) {
      var { editProjects } = nextProps;
      this.setState({
        id: editProjects._id,
        name: editProjects.name,
        typeOfProject: editProjects.typeOfProject,
        totalArea: editProjects.totalArea,
        startYear: editProjects.startYear,
        endYear: editProjects.endYear,
        username: editProjects.username,
      });
    }
  }

  handleChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  validation = () => {
    let isError = false;
    const errors = {
      nameError: '',
      idError: ''
    };
    if (this.state.name === '') {
      isError = true;
      errors.nameError = "Name of project is not null";
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError
  }

  handleSave = (e) => {
    e.preventDefault();
    var {history} = this.props;
    var id = history.location.pathname.split("/")[2];
    if(id === "add") {
      id = ""
    }
    // this.setState({
    //   id: id
    // })
    


    console.log('Project add, username: ', this.state.username)
    const err = this.validation();
    if (!err) {
      var { history } = this.props;
      if (id === '') {
        console.log("button save");
        console.log(this.state);
        this.props.addProject(this.state);
        history.replace("/Adminprojectlistpage");
      }
      else {

        console.log("id:", id);
        console.log("button update");
        console.log("this state: ",this.state);

        var projectUpdate = {
          endYear: this.state.endYear,
          _id: this.state.id,
          name: this.state.name,
          nameError: this.state.nameError,
          nameProject: this.state.nameProject,
          owner: this.state.owner,
          startYear: this.state.startYear,
          totalArea: this.state.totalArea,
          typeOfProject: this.state.typeOfProject,
          username: this.state.username,
        }
        console.log("this projectUpdate:  ", projectUpdate);
        this.props.updateProject(projectUpdate);
        history.replace("/Adminprojectlistpage");
      }
    }
  }

  render() {
    var { name, _id, typeOfProject, totalArea, startYear, endYear  } = this.state;
    return (
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <form>
          <div className='form-group'>
            <label>ID</label>
            <input
              type='text'
              name='_id'
              disabled
              className='form-control'
              placeholder='Project ID'
              value={_id} onChange={this.handleChange.bind(this)}
            />
            <div className="errorMsg">{this.state.idError}</div>
          </div>
          <div className='form-group'>
            <label>Project Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Project Name'
              value={name}
              onChange={this.handleChange.bind(this)}
            />
            <div className="errorMsg">{this.state.nameError}</div>
          </div>
          <div className='form-group'>
            <label>Type of Project</label>
            <input
              type='text'
              name='typeOfProject'
              className='form-control'
              placeholder='Type of Project'
              value={typeOfProject}
              onChange={this.handleChange.bind(this)}
            />
            <div className="errorMsg">{this.state.nameError}</div>
          </div>
          <div className='form-group'>
            <label>Total Area</label>
            <input
              type='text'
              name='totalArea'
              className='form-control'
              placeholder='Total Area'
              value={totalArea}
              onChange={this.handleChange.bind(this)}
            />
            <div className="errorMsg">{this.state.nameError}</div>
          </div>
          <div className='form-group'>
            <label>Start Year</label>
            <input
              type='text'
              name='startYear'
              className='form-control'
              placeholder='Start Year'
              value={startYear}
              onChange={this.handleChange.bind(this)}
            />
            <div className="errorMsg">{this.state.nameError}</div>
          </div>
          <div className='form-group'>
            <label>End Year</label>
            <input
              type='text'
              name='endYear'
              className='form-control'
              placeholder='End Year'
              value={endYear}
              onChange={this.handleChange.bind(this)}
            />
            <div className="errorMsg">{this.state.nameError}</div>
          </div>
          <br />
          <button className='btn btn-primary inline mr-1'
            onClick={this.handleSave.bind(this)}>
            Save
          </button>
          <Link
            to="/Adminprojectlistpage"
            className='btn btn-primary mr-1'>
            Close
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //project states
    projects: state.projects,
    editProjects: state.editProjects,
  }
}

const mapDispatchToProps = (dispatch) => {
  //dispatch actions by using imported action methods
  return {
    addProject: (project) => { dispatch(actAddProjectRequest(project)) },
    getProject: (_id) => { dispatch(actGetProjectRequest(_id)); },
    updateProject: (project) => { dispatch(actUpdateProjectRequest(project)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adminprojectactionform);
