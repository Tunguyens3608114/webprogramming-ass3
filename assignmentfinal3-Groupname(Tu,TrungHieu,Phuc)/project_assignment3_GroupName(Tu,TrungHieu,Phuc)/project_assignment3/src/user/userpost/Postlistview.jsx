import React from 'react';
import { Link } from 'react-router-dom';


class Postlistview extends React.Component {

  render() {
    return (
      <div className='table table-responsive col-sm-9'>
        <table className='table'>
          <thead className='thead-light text-center'>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.showItems.map((post, index) =>
              <tr className='post-table' key={index}>
                <td>
                  <img className='img1 img-responsive'
                    src={post.imageUrl}
                    alt={post.name} />
                </td>
                <td>{post.name}</td>
                <td>${post.price}</td>
                <td>{post.description}
                  <br />
                  <b>Brand:</b>
                  {post.brand}
                  <br />
                  <b>Producer:</b>
                  {post.producer}
                  <br />
                </td>
                <td>
                  <br />
                  <Link
                    to={`/postdetail/${post._id}/view`}
                    className='btn btn-info'
                    onClick={() => this.getpost(post._id)}>
                    <span className='fa fa-pencil-square-o'></span> view
                                </Link>

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default (Postlistview);

