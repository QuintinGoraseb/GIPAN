import './App.css'
import {Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import ContactPage from './pages/ContactPage'



function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/home' element={<IndexPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default App
