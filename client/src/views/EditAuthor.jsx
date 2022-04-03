import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import NavigationBar from '../components/NavigationBar';

const EditAuthor = (props) =>{
    const {id} = props.match.params
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false)
    const [editError, setEditError] = useState('');

    const getAuthorById = async (authorId) =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/author/${authorId}`)
            console.log("Response", response.statusText);
            setAuthor(response.data.author);
            setLoaded(true);
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
      getAuthorById(id);
    }, [])
    
    const editAuthor = async (author) =>{
        console.log("Author edited");
        try {
            const response = await axios.put(`http://localhost:8000/api/authors/${id}`,author)
            console.log("Response",response.statusText);
        } catch (error) {
            console.log("Error",error.response.data.error.message);   
            setEditError(error.response.data.error.message); 
        }
    }

    return(
        <div>
            {
                loaded && (
                    <div>
                        <NavigationBar/>
                        <h1>Edit Author</h1>
                        <AuthorForm initialAuthor={author} onSubmitCreatedForm={editAuthor} validate={editError}/>
                    </div>
                )
            }
        </div>
    );

}
export default EditAuthor;