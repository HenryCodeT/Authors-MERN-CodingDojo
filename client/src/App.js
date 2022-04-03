import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import FavoriteAuthors from './views/FavoriteAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={(routeProps)=><FavoriteAuthors {...routeProps}/>}/>
          <Route exact path={"/author/new"} render={(routeProps)=><NewAuthor {...routeProps}/>}/>
          <Route exact path={"/author/edit/:id"} render={(routeProps)=><EditAuthor {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
