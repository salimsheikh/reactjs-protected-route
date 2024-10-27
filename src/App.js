import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Orders from './Orders/Orders';
import Blog from './Blog/Blog';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/myorders">Orders</Link>
    <Link to="/myblog">Blog</Link>
  </nav>
)

function App() {
  const { isAuthenticated } = useSelector((state) => state.root);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/dashboard' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='login' element={<Login />} />


        {/*        
        <Route path='Profile' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path='myorders' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Orders />
          </ProtectedRoute>
          } />
        */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='profile' element={<Profile />} />
          <Route path='myorders' element={<Orders />} />
        </Route>
        <Route path='myblog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
