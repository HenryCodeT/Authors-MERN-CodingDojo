import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthorForm = (props) =>{
    // //// FIELDS /////////////////////////////////////////
    const {initialAuthor, onSubmitCreatedForm, validate} = props
    const [author, setAuthor] = useState(initialAuthor);
    // //// 

    const handleCreateAuthor = (e) =>{
        e.preventDefault();
        onSubmitCreatedForm(author);
    }

    return(
    <div className='col-5 mx-auto'>
        <form onSubmit={handleCreateAuthor} >
            <div className='row form-group'>
                <label className='col form-label' htmlFor="name">Name</label>
                <input className='col form-control border border-dark' onChange={(e)=>setAuthor({name:e.target.value})} type="text" name='name' value={author.name} />
                {
                    validate ? <p className='text-danger'>{validate}</p> : ''
                }
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
            <Link className='btn btn-warning' to={"/"}>Cancel</Link>
        </form>
    </div>
    );

}
export default AuthorForm;