import * as Types from '../reducers/constants/actionTypeProjects';
import callApi from '../reducers/utils/apiCaller';

export const actFetchProjectsRequest = () => {
  return dispatch => {
    return callApi('projects', 'GET', null).then(res => {
      dispatch(actFetchProjects(res.data));
    });
  };
}

export const actFetchProjects = (projects) => {
  return {
    type: Types.FETCH_PROJECTS_SUCCESS,
    projects
  }
}

// I try to create this function for Own project
export const actFetchOwnProjectsRequest = (username) => {
  var body = {
    username: username
  }
  return dispatch => {
    return callApi('projects/getown', 'POST', body).then(res => {
     // console.log('req.username;', username) /// <---- true/ superwomen
      dispatch(actFetchOwnProjects(res.data));
     // console.log('res.data;', res.data) // <--- true/ get data successfuly!
    });
  };
}

export const actFetchOwnProjects = (projects) => {
  return {
    type: Types.FETCH_OWNPROJECTS_SUCCESS,
    projects
  }
}

export const actDeleteProjectRequest = (_id) => {
  return dispatch => {
    return callApi(`projects/${_id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProject(_id));
    })
  }
}

export const actDeleteProject = (_id) => {
  return {
    type: Types.DELETE_PROJECT,
    _id
  }
}

export const actAddProjectRequest = (project) => {
  return dispatch => {
    return callApi('projects', 'POST', project).then(res => {
      dispatch(actAddProject(res.data));
    });
  }
}

export const actAddProject = (project) => {
  return {
    type: Types.ADD_PROJECT,
    project
  }
}

export const actGetProjectRequest = (_id) => {
  return dispatch => {
    return callApi(`projects/${_id}`, 'GET', null).then(res => {
      dispatch(actGetProject(res.data));
    });
  }
}

export const actGetProject = (project) => {
  return {
    type: Types.EDIT_PROJECT,
    project
  }
}

export const actUpdateProjectRequest = (project) => {
  return dispatch => {
    return callApi(`projects/${project._id}`, 'PUT', project).then(res => {
      dispatch(actUpdateProject(res.data));
    });
  }
}

export const actUpdateProject = (project) => {
  return {
    type: Types.UPDATE_PROJECT,
    project
  }
}