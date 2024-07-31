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
import Profile from './assets/pages/Profile/Profile'
import EditReview from './assets/pages/EditReview/EditReview'

export const CurrentUserContext = createContext({
  id: null,
  name: '',
  email: '',
  role: null,
  isLogged: false
});

function App() {

  const [currentUser, setCurrentUser] = useState({});


  const handleLogout = () => {
    setCurrentUser({
      isLogged: false
    })
    };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Layout handleLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="filmList" element={<FilmList />} />
            <Route path="reviewList" element={<ReviewList />} />
            <Route path="review" element={<Review />} />
            <Route path="editReview" element={<EditReview />} />
            <Route path="film" element={<Film />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  )
}

export default App
