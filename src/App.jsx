import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
