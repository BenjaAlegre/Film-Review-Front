import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/components/Layout/Layout'
import Login from './assets/pages/Login/Login'
import Register from './assets/pages/Register/Register'
import FilmList from './assets/pages/FilmList/FilmList'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="filmList" element={<FilmList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
