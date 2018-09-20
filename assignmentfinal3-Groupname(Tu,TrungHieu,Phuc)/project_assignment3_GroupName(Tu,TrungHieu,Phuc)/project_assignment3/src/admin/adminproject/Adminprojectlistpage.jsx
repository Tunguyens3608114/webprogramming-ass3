import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//** impport File */
import Adminprojectlist from '../adminproject/Adminprojectlist';
import Adminnavbar from '../navbar/Adminnavbar';

import {
  actFetchProjectsRequest, actDeleteProjectRequest, actGetProjectRequest, actFetchOwnProjectsRequest
} from '../../action/projectsaction';

class Adminprojectlistpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullNameProp: 'Adminstrator',
      emailProp: 'admin@gmail.com',
      usernameProp: 'Admin',
      isLogined: false,
    }
    this.getProject = this.getProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentDidMount() {
    //  this.props.fetchProjects();
    if (JSON.parse(localStorage.getItem('session'))) {
      console.log('adminproject list page: ', JSON.parse(localStorage.getItem('session')).username)
      this.props.fetchOwnProjects(JSON.parse(localStorage.getItem('session')).username);
    } else {
      this.props.fetchProjects();
    }
  }
  getProject(_id) {
    this.props.getProject(_id);
  }
  deleteProject(_id) {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.deleteProject(_id);
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <Adminnavbar />
        </div>
        <div>
          <Link
            to="/Adminprojectactionform/add"
            className='btn btn-primary mr-2'>
            <span className='fa fa-plus'></span> Add Project
          </Link>
          <Adminprojectlist
            pages={this.props.pages}
            currentPage={this.props.currentPage}
            projects={this.props.projects}
            getProject={this.getProject}
            deleteProject={this.deleteProject}
          />
        </div>
      </div>
    );
  }
}

function getNumberPage(projects, pageNo) {
  // I assumed showing 10 merchants per page
  const perPage = 5;
  if (projects.length) {
    // Filter 10 merchants by page number
    return projects.filter((project, i) => {
      return i >= perPage * (pageNo - 1) && i < perPage * pageNo;
    });
  }
  return [];
}

function mapStateToProps(state, ownProps) {

  let pageNo = ownProps.match.params.pageNo || 1;
  let projects = getNumberPage(state.projects, pageNo);
  return {
    //project states
    //projects: state.projects,
    projects: projects,
    pages: Math.ceil(state.projects.length / 5), // Determine number of pages for pagination
    // pages:1,
    currentPage: pageNo,
    //  projects: state.projects,
    editProjects: state.editProjects,
  }
}
function mapDispatchToProps(dispatch) {
  //dispatch actions by using imported action methods
  return {
    //dispatch actions for projects
    fetchProjects: () => { dispatch(actFetchProjectsRequest()) },
    fetchOwnProjects: (username) => { dispatch(actFetchOwnProjectsRequest(username)) },
    deleteProject: (_id) => { dispatch(actDeleteProjectRequest(_id)) },
    getProject: (_id) => { dispatch(actGetProjectRequest(_id)); },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Adminprojectlistpage);

