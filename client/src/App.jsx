import './App.css'
import {Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import PasswordPage from './pages/PasswordPage'
import PortalPage from './pages/PortalPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/UserPage'




function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/home' element={<IndexPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/password' element={<PasswordPage />} />
      <Route path='/portal' element={<PortalPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/user' element={<UserPage />} />
    </Routes>
  )
}

export default App
