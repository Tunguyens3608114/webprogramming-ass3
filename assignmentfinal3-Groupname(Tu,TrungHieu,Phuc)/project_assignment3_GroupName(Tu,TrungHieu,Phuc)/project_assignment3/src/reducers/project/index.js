import { combineReducers } from 'redux';
import projects from './projects';
import editProjects from './editprojects';
import posts from '../post/posts';
import editPosts from '../post/editPosts';

const appReducers = combineReducers({
  projects,
  editProjects,
  posts,
  editPosts,
});

export default appReducers;