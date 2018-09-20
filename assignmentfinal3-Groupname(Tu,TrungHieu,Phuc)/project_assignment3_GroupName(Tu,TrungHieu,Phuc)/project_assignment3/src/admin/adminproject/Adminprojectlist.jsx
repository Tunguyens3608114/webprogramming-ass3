import React from 'react';
import Projectpaging from '../../reducers/paging/Projectpaging';
import {Link} from 'react-router-dom';

const Adminprojectlist  = ({projects,pages,currentPage, deleteProject , getProject}) =>{
        console.log('projects: ',projects);
        return (
                        <div className='table table-responsive'>
                            <table className='table table-borderd table-hover'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th className='text-center'>ID</th>
                                        <th className='text-center'>Name</th>
                                        <th className='text-center'>Owner</th>
                                        <th className='text-center'>Type of Project</th>
                                        <th className='text-center'>Total Area</th>
                                        <th className='text-center'>Start Year</th>
                                        <th className='text-center'>End Year</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {projects.map((project, index) =>
                                    <tr className='text-center' key={index}>
                                            <td>{project._id}</td>
                                            <td>{project.name}</td>
                                            <td>{project.username}</td>
                                            <td>{project.typeOfProject}</td>
                                            <td>{project.totalArea}</td>
                                            <td>{project.startYear}</td>
                                            <td>{project.endYear}</td>                                        
                                        <td>
                                            <Link 
                                                to = "/Adminprojectlistpage"
                                                className='btn btn-danger'
                                                onClick={() =>deleteProject(project._id)}>
                                                
                                                <span className='fa fa-trash-o'></span>
                                                 Delete
                                            </Link>
                                            &nbsp;
                                            <Link 
                                                to={`/Adminprojectactionform/${project._id}/edit`} 
                                                className='btn btn-info'
                                                 onClick={() =>getProject(project._id)}
                                                 >
                                                <span className='fa fa-pencil-square-o'></span> Edit
                                            </Link>
                                        </td>
                                     </tr>
                                    )
                                }
                                </tbody>
                            
                            </table>
                                {pages> 1 && <Projectpaging pages={pages} currentPage={currentPage}/>
                            }
                        </div>
        );
    }
    

export default Adminprojectlist;