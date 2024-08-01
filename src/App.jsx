import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/components/Layout/Layout'
import Login from './assets/pages/Login/Login'
import Register from './assets/pages/Register/Register'
import FilmList from './assets/pages/FilmList/FilmList'
import ReviewList from './assets/pages/ReviewList/ReviewList'
import Film from './assets/pages/Film/Film'
import Home from './assets/pages/Home/Home'
import Review from './assets/pages/Review/Review'
import Profile from './assets/pages/Profile/Profile'
import EditReview from './assets/pages/EditReview/EditReview'
import AdminPanel from './assets/pages/adminPanel/AdminPanel'
import Unauthorized from './assets/pages/Unauthorized/Unauthorized'
import RoleAccess from './assets/common/utils/RoleAccess'

function App() {

  return (
    <BrowserRouter>
      <Layout>
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
          <Route element={<RoleAccess />}>
            <Route path="adminPanel" element={<AdminPanel />} />
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
