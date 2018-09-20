import React from 'react';
import { Link } from 'react-router-dom';


class Postgridview extends React.Component {


  render() {
    return (
      <div>
        <div className='row'>

          {this.props.showItems.map((post, index) =>
            <div className='col-sm-4' key={index}>
              <div className='card card-cascade post-card'>
                <div className='view hm-white-slight waves-light'>
                  <img className='img1 img-responsive imd-fluid'
                    src={post.imageUrl}
                    alt={post.name} />

                </div>
                <div className='card-body'>

                  <hr />
                  <p className='card-text'>{post.name}</p>
                  <p className='card-text'>${post.price}</p>
                  <p className='card-text'><b>Brand:</b> {post.brand}</p>
                  <p className='card-text'><b>Producer:</b> {post.producer}</p>

                </div>
                <div>
                  <Link
                    to={`/Postdetail/${post._id}/view`}
                    className='btn btn-info'
                    onClick={() => this.getPost(post._id)}>
                    <span className='fa fa-pencil-square-o'></span> view
                            </Link>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

}


export default (Postgridview);

