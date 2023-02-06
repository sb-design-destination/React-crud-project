import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpage';
import Home from './home.jsx';
import Login from './login';
import SignUp from './signup';
import UserList from './userlist.jsx';
import UserDetails from './userdetails.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/user-details/:id' element={<UserDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
