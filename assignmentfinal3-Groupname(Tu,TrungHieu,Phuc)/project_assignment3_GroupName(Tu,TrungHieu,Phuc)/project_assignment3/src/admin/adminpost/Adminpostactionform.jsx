import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  actUpdatePostRequest, actAddPostRequest, actGetPostRequest
} from '../../action/postsaction';

class Adminpostactionform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      description: '',
      brand: '',
      producer: '',
      imageUrl: '',
      postType: '',

      title: '',
      price: '',
      area : '',
      numberBedroom: '',
      numberFloor: '',
      direction: '',
      contactPhone: '',
      address: '',
      postDate: '',
      expiredDate: '',
      username: 'admin',

      titleError: '',
      priceError: '',
      descriptionError: '',
      brandError: '',
      producerError: '',
      imageUrlError: '',
    }
  }
  componentDidMount() {
    // console.log(JSON.parse(localStorage.getItem('session')).username)
     //  this.props.fetchProjects();
     if (JSON.parse(localStorage.getItem('session')) ) {
       this.setState({
         username: JSON.parse(localStorage.getItem('session')).username,
       })
     }
   }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editPosts) {
      var { editPosts } = nextProps;
      this.setState({
        id: editPosts._id,
        name: editPosts.name,
        price: editPosts.price,
        description: editPosts.description,
        brand: editPosts.brand,
        producer: editPosts.producer,
        imageUrl: editPosts.imageUrl,
        postType: editPosts.postType
      });
    }
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  clear() {
    this.setState({
      id: '',
      title: '',
      price: '',
      area : '',
      numberBedroom: '',
      numberFloor: '',
      direction: '',
      contactPhone: '',
      address: '',
      postDate: '',
      expiredDate: '',
    })
  }
  validate = () => {
    let isError = false;
    const errors = {
      nameError: '',
      priceError: '',
      descriptionError: '',
      brandError: '',
      producerError: '',
      imageUrlError: '',
      postTypeError: '',
    };
    if (this.state.title === '') {
      isError = true;
      errors.titleError = "Name of post is not null";
    }
    if (this.state.price === '') {
      isError = true;
      errors.priceError = "Price is not null";
    }
    if (this.state.description === '') {
      isError = true;
      errors.descriptionError = "Description is not null";
    }

    if (this.state.brand === '') {
      isError = true;
      errors.brandError = "Brand is not null";
    }

    if (this.state.producer === '') {
      isError = true;
      errors.producerError = "Producer is not null";
    }

    if (this.state.imageUrl === '') {
      isError = true;
      errors.imageUrlError = "ImageUrl is not null";
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
    console.log("id from post ",id);

    const err = 0 //this.validate();
    if (!err) {
      var { history } = this.props
      if (id === '') {
        console.log('fail')
        console.log(this.state.id)
       // this.props.addPost(this.state);
       // history.goBack();
      }
      else {
        var postUpdate = {
          _id: this.state.id,
          title: this.state.name,
          price: this.state.nameError,
          area: this.state.nameProject,
          numberBedroom: this.state.numberBedroom,
          numberFloor: this.state.numberFloor,
          direction: this.state.direction,
          contactPhone: this.state.contactPhone,
          address: this.state.address,
          postDate: this.state.postDate,
          expiredDate: this.state.expiredDate,
          username: this.state.username,
        }
        console.log('success')
        console.log(this.state.id)
        this.props.updatePost(postUpdate);
       // history.goBack();
      }
    }
  }

  reset(e) {
    e.preventDefault();
    this.setState({
      name: '',
      price: '',
      description: '',
      brand: '',
      producer: '',
      imageUrl: '',
      postType: '',
    })
  }
  render() {
    var { id, name, price, description, brand, producer, imageUrl, postType } = this.state;
    return (
      <div className='card'>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <div className='form-row'>
                <div className='col'>
                  <label>ID</label>
                  <input
                    type='text'
                    name='id'
                    disabled
                    className='form-control'
                    placeholder='Post ID'
                    value={id} onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='col'>
                  <label>Post Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Post Name'
                    value={name} onChange={this.handleChange.bind(this)}
                  />
                  <div className="errorMsg">{this.state.nameError}</div>
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label>Price</label>
              <input
                type='text'
                name='price'
                className='form-control'
                placeholder='Post Price'
                value={price} onChange={this.handleChange.bind(this)} />
              <div className="errorMsg">{this.state.priceError}</div>
            </div>

            <div className='form-group'>
              <label>Description:</label>
              <textarea
                className='form-control'
                name='description' rows='3' col='2'
                value={description} onChange={this.handleChange.bind(this)}>
              </textarea>
              <div className="errorMsg">{this.state.descriptionError}</div>
            </div>
            <div className='form-group'>
              <div className='form-row'>
                <div className='col'>
                  <label>Brand</label>
                  <input
                    type='text'
                    name='brand'
                    className='form-control'
                    placeholder='Post Brand'
                    value={brand} onChange={this.handleChange.bind(this)} />
                  <div className="errorMsg">{this.state.brandError}</div>
                </div>
                <div className='col'>
                  <label>Producer</label>
                  <input
                    type='text'
                    name='producer'
                    className='form-control'
                    placeholder='Post Producer'
                    value={producer} onChange={this.handleChange.bind(this)} />
                  <div className="errorMsg">{this.state.producerError}</div>
                </div>
              </div>

            </div>

            <div className='form-group'>
              <label>Image URL</label>
              <input
                type='text'
                name='imageUrl'
                className='form-control'
                placeholder='Image URL'
                value={imageUrl} onChange={this.handleChange.bind(this)} />
              <div className="errorMsg">{this.state.imageUrlError}</div>
            </div>

            <div className="form-group">
              <label>Select Project:</label>
              <select
                className="form-control"
                name='postType' onChange={this.handleChange.bind(this)}>
                <option defaultValue >Choose here</option>

                {this.props.projects.map((c, index) =>
                  <option key={index} defaultValue={postType === c._id} value={c._id}>
                    {c.name}
                  </option>)}
              </select>

            </div>
            <br />
            <button
              className='btn btn-primary inline mr-1'
              onClick={this.handleSave.bind(this)}>
              Save
                        </button>
            <button
              className='btn btn-primary inline mr-1'
              onClick={this.reset.bind(this)}>
              Reset
                        </button>
            <Link
              to="/Adminpostlistpage"
              className='btn btn-primary mr-1'>
              Close
                        </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //post states
    posts: state.posts,
    editPosts: state.editPosts,
    //project states
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  //dispatch actions by using imported action methods
  return {
    //dispatch actions for posts
    addPost: (post) => { dispatch(actAddPostRequest(post)) },
    getPost: (_id) => { dispatch(actGetPostRequest(_id)); },
    updatePost: (post) => { dispatch(actUpdatePostRequest(post)); },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Adminpostactionform);