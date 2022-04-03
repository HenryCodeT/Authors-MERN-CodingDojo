import React from 'react';
import AuthorList from '../components/AuthorList';
import NavigationBar from '../components/NavigationBar';

const FavoriteAuthors = (props) => {
    return(
        <div>
            <NavigationBar/>
            <AuthorList/>
        </div>
    );
}
export default FavoriteAuthors;