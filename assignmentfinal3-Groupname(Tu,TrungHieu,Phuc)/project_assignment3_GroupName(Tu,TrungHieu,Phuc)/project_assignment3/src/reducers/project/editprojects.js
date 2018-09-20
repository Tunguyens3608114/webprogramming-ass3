import * as Types from './../constants/actionTypeProjects';

var initialState = {};

const editProjects = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PROJECT:
      state = action.project;
      return state;
    default:
      return state;
  }
}

export default editProjects;