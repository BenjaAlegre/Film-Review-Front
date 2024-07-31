import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/components/Layout/Layout'
import Login from './assets/pages/Login/Login'
import Register from './assets/pages/Register/Register'
import FilmList from './assets/pages/FilmList/FilmList'
import ReviewList from './assets/pages/ReviewList/ReviewList'
import Film from './assets/pages/Film/Film'
import Home from './assets/pages/Home/Home'
import { createContext, useState } from 'react'
import Review from './assets/pages/Review/Review'

export const CurrentUserContext = createContext({
  id: null,
  name: '',
  email: '',
  role: null
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login onLogin={handleLogin} />} />
            <Route path="register" element={<Register />} />
            <Route path="filmList" element={<FilmList />} />
            <Route path="reviewList" element={<ReviewList />} />
            <Route path="review" element={<Review />} />
            <Route path="film" element={<Film />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  )
}

export default App
