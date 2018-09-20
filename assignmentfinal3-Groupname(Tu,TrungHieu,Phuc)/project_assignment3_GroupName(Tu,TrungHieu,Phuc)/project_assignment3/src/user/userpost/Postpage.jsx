import React from 'react';
import Postlistview from '../userpost/Postlistview.jsx';
import Postgridview from '../userpost/Postgridview.jsx';

import { connect } from 'react-redux';


import {
  actGetPostRequest, actFetchPostsRequest,
   } from '../../action/postsaction';

   import {
    actFetchProjectsRequest,
    } from '../../action/projectsaction';  


 class Postpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showItems: props.posts, 
            showfilter: 'gridview' 
        
    }

    }
    componentDidMount(){
        this.props.fetchProjects()
        this.props.fetchPosts()
        
    }

    componentWillReceiveProps(nextprops) {
        this.setState({ showItems: nextprops.posts });
    }


    filterbyproject(id) {
        let getidproject = this.props.posts.filter((post) => post.postType === id);
        this.setState({ showItems: getidproject });
    }


    filterprice(filter) {
        if (filter === 'LOW_PRICE') {
            let lowprice = this.props.posts.sort(function (price_a, price_b) {
                return parseFloat(price_a.price) - parseFloat(price_b.price);
            });
            this.setState({ showItems: lowprice });
        }
        else if (filter === 'HIGH_PRICE') {
            let highprice = this.props.posts.sort(function (price_a, price_b) {
                return parseFloat(price_b.price) - parseFloat(price_a.price);
            });
            this.setState({ showItems: highprice });
        }
    }


    filterview(filter) {
        if (filter === 'gridview') {
            this.setState({ showfilter: 'gridview' })
        }
        else {
            this.setState({showfilter: 'listview'})
        }
    }

    render() { 
       
        return ( 
            <div className='container-fluid'>
               <div className='col-sm -6'>
                  <br/> 
               </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <div className='card filter-card'>
                            <div className='card-header bg-light text-black'>
                                <h4 className='title'>Filter By</h4>
                            </div>
                            <div className='card-body'>
                                <div className='card-header'>
                                    <h5 className='card-title'>
                                        <a data-toggle='collapse' href='#myProject'>
                                            Project
							            </a>
                                    </h5>
                                </div>
                                <div id='myProject'
                                 className='collapse in' >
                                    <ul className='list-group'>
                                        {this.props.projects.map((project, index) =>
                                            <li key={index} className='list-group-item'>
                                                <href className='btn-link' onClick={() => this.filterbyproject(project._id)}>
                                                    {project.name}
                                                </href>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className='card-header'>
                                    <h5 className='card-title'>
                                        <a data-toggle='collapse' href='#myPrice'>
                                         Price
							            </a>
                                    </h5>
                                </div>
                                <div id='myPrice' className='collapse in' >
                                    <ul className='list-group'>
                                        <li className='list-group-item'>
                                            <div className='btn-link' onClick={() => this.filterprice('LOW_PRICE')}>
                                                Low Price
                                            </div>
                                        </li>
                                        <li className='list-group-item'>
                                            <div className='btn-link' onClick={() => this.filterprice('HIGH_PRICE')}>
                                                High Price
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-10'>
                            <div className='btn-group'>
                                <button
                                    type='button' 
                                    className='btn btn-primary' 
                                    onClick={() => this.filterview('gridview')}>
                                    GridView 
                                </button>
                                &nbsp;
                                <button
                                    type='button'
                                    className='btn btn-success'
                                    onClick={() => this.filterview('listview')}>
                                    ListView 
                                </button>
                                   
                            </div>
                        <div>
                            {this.state.showfilter === 'listview' ? 
                            <Postlistview 
                                
                            showItems={this.state.showItems}
                            projects={this.props.projects}
                            posts = {this.props.posts}/>
                             
                                    
                            :
                            <Postgridview 
                            projects={this.props.projects}
                            showItems={this.state.showItems}
                            posts = {this.props.posts}/>
                                  
                           }
                           
                        </div>
                       <div>                        
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

        projects: state.projects,
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
        //dispatch actions for posts and projects
        getPost: (_id) => { dispatch(actGetPostRequest(_id)); },
        fetchProjects: () => { dispatch(actFetchProjectsRequest()) },
        fetchPosts: () => { dispatch(actFetchPostsRequest()) },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Postpage);