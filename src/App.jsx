import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Login from './pages/Login';
import Netfliz from './pages/Netfliz';
import SignUp from './pages/SignUp';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import UserListedMovies from './pages/UserListedMovies';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Netfliz/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/signup' element={<SignUp/>}/>
          <Route path='/player' element={<Player/>}/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/tv' element={<TvShows/>}/>
          <Route path='/mylist' element={<UserListedMovies/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
