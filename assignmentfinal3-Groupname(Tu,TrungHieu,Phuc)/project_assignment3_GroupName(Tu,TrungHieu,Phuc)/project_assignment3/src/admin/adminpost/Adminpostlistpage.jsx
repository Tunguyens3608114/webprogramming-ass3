import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Adminnavbar from '../navbar/Adminnavbar';
import Postpaging from '../../reducers/paging/Postpaging';
import {
  actFetchPostsRequest, actDeletePostRequest, actGetPostRequest,
} from '../../action/postsaction';

import {
  actFetchProjectsRequest, actFetchOwnProjectsRequest
} from '../../action/projectsaction';

class Adminpostlistpage extends React.Component {
  constructor(props) {
    super(props);
    this.getPost = this.getPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.state = {
      search: '',
    }
  }

  updatesearch(e) {
    this.setState({ search: e.target.value })
  }

  getPost(_id) {
    this.props.getPost(_id);
  }
  deletePost(_id) {
    if (confirm('Do you want to delete ?')) { //eslint-disable-line
      this.props.deletePost(_id);
    }
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchProjects();

    // if (JSON.parse(localStorage.getItem('session')) ) {
    //   this.props.fetchOwnProjects(JSON.parse(localStorage.getItem('session')).username);
    // } else {
    //   this.props.fetchProjects();
    // }
  }

  render() {
    // let find = this.props.posts.filter(
    //   (post) => {
    //     return post.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //   }
    // );
    return (
      <div className='row'>
        <div className='col-sm-2'>
          <Adminnavbar />
        </div>
        <div className='col-sm-3'>
          <br />
          <br />
          <div className='btn-group'>
            <Link
              to='/Adminpostactionform/add'
              className='btn btn-primary mr-2'>
              <span className='fa fa-plus'></span> Add Post
            </Link>
            <br/>
            &nbsp;
            <input type="text"
              name="search"
              placeholder='Search Name'
              value={this.state.search}
              onChange={this.updatesearch.bind(this)} />
          </div>
          <div className='panel-body'>
            <table className='table table-striped table-hover table-sm'>
              <thead className='thead-dark text-center'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Brand</th>
                  <th>Producer</th>
                  <th>Image</th>
                  <th>Project</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.posts.map((post, index) =>
                  <tr className='text-center' key={index}>
                    <td>{post._id}</td>
                    <td>{post.name}</td>
                    <td>${post.price}</td>
                    <td>{post.description}</td>
                    <td>{post.brand}</td>
                    <td>{post.producer}</td>
                    <td> <img className='img2 img-responsive' src={post.imageUrl} alt='' /></td>
                    <td>{post.postType}</td>
                    <td>
                      <Link
                        to='/Adminhome'
                        className='btn btn-danger'
                        onClick={() => this.deletePost(post._id)}>
                        <span className='fa fa-trash-o'></span> Delete
                        </Link>
                      &nbsp;
                      &nbsp;
                        <Link
                        to={`/Adminpostactionform/${post._id}/edit`}
                        className='btn btn-info'
                        onClick={() => this.getPost(post._id)}>
                        <span className='fa fa-pencil-square-o'></span> Edit
                        </Link>
                    </td>
                  </tr>
                  )
                }
              </tbody>
            </table>
            {
              this.props.pages > 1 && <Postpaging pages={this.props.pages} currentPage={this.props.currentPage} />
            }
          </div>

        </div>
        <div className='col-sm-1'></div>
      </div>
    );
  }
}

function getNumberPage(posts, pageNo) {
  // I assumed showing 10 merchants per page
  const perPage = 10;
  if (posts.length) {
    // Filter 10 merchants by page number
    return posts.filter((post, i) => {
      return i >= perPage * (pageNo - 1) && i < perPage * pageNo;
    });
  }
  return [];
}

const mapStateToProps = (state, ownProps) => {
  let pageNo = ownProps.match.params.pageNo || 1;
  let posts = getNumberPage(state.posts, pageNo);
  return {
    //post states
    posts: posts,
    pages: Math.ceil(state.posts.length / 10), // Determine number of pages for pagination
    currentPage: pageNo,
    editPosts: state.editPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  //dispatch actions by using imported action methods
  return {
    //dispatch actions for posts and projects
    fetchPosts: () => { dispatch(actFetchPostsRequest()) },
    getPost: (_id) => { dispatch(actGetPostRequest(_id)); },
    deletePost: (_id) => { dispatch(actDeletePostRequest(_id)) },
    fetchProjects: () => { dispatch(actFetchProjectsRequest()) },
    fetchOwnProjects: (username) => { dispatch(actFetchOwnProjectsRequest(username)) },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Adminpostlistpage);