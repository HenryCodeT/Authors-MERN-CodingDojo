import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) =>{
    // //// FIELDS /////////////////////////////////
    const [authors, setAuthors] = useState([]);
    
    // //// API GET ALL /////////////////////////////////
    const getAllAuthors = async () =>{
        try {
            const response = await axios.get("http://localhost:8000/api/authors")
            console.log("Response:",response.statusText);
            setAuthors(response.data.authors);
        } catch (error) {
            console.log("Error",error);
        }
    } 
    useEffect(() => {
      getAllAuthors()
    }, [])

    const deleteAuthorFromList = (authorId) =>{
        setAuthors(authors.filter((author)=> author._id !== authorId));
    }

    return(
        <div className='col-6 mx-auto'>
            <h3>We have quotes By:</h3>
            <table className= 'table table-dark table-striped'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Action Avaiable</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authors.map((author,index)=>
                        <tr key={index}>
                            <th scope='row'>{index}</th> 
                            <td>{author.name}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/author/edit/${author._id}`}> Edit </Link>
                                <DeleteButton authorId={author._id} successDeleted={()=>deleteAuthorFromList(author._id)} />
                            </td>
                        </tr>
                    )
                }    
                </tbody>
            </table>
        </div>
    );
}
export default AuthorList;