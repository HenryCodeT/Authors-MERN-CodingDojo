import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import NavigationBar from '../components/NavigationBar';

const NewAuthor = (props) =>{
    
    const initialAuthor = {
        name:''
    }
    // //// FIELDS //////////////////////////////////////////////////////////////////////////////
    const [author, setauthor] = useState(initialAuthor);
    const [createError, setCreateError] = useState('');
    
    const createNewAuthor = async (author) =>{
        try {
            const response = await axios.post("http://localhost:8000/api/authors",author);
            console.log("Response",response.statusText);
            props.history.push("/")

        } catch (error) {
            console.log("Error",error.response.data.error.message);   
            setCreateError(error.response.data.error.message); 
        }
    }

    return(
        <div>
            <NavigationBar/>
            <h1>New Author</h1>
            <AuthorForm initialAuthor={author} onSubmitCreatedForm={createNewAuthor} validate={createError}/>
        </div>
    );
}
export default NewAuthor;