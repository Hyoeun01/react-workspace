
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Admin from './pages/admin/Admin';
import NotFound from './pages/not-found/NotFound';
import UnAuthorized from './pages/unauthorized/UnAuthorized';
import Profile from './pages/profile/Profile';
import AuthGuard from './guards/AuthGuard';
import { Role } from './model/Role';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/profile' element={
              <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <Profile />
              </AuthGuard>}></Route>
            <Route path='/admin' element={
              <AuthGuard roles={[Role.ADMIN]}>
                <Admin />
                </AuthGuard>}></Route>
            <Route path='/404' element={<NotFound />}></Route>
            <Route path='/401' element={<UnAuthorized />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
