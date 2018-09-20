import * as Types from '../constants/actionTypeProjects';
var initialState = [];

var findIndex = (projects, id) => {
  var result = -1;
  projects.forEach((project, index) => {
    if (project.id === id) {
      result = index;
    }
  });
  return result;
}

const projects = (state = initialState, action) => {
  var index = -1;
  var {
    id,
    project
  } = action;
  switch (action.type) {
    case Types.FETCH_OWNPROJECTS_SUCCESS:
      state = action.projects;
      return [...state];
    case Types.FETCH_PROJECTS_SUCCESS:
      state = action.projects;
      return [...state];
    case Types.DELETE_PROJECT:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PROJECT:
      state.push(action.project);
      return [...state];
    case Types.UPDATE_PROJECT:
      index = findIndex(state, project.id);
      state[index] = project;
      return [...state];
    default:
      return [...state];
  }
};

export default projects;