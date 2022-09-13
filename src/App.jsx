import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact Us/Contact'
import Membership from './Pages/Membership/Membership'
import NotFound from './Pages/Not found/Notfound'
import Navbar from './Components/Navbar'
import Aboutus from './Pages/About Us/Aboutus'
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='Aboutus' element={<Aboutus/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Membership' element={<Membership/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>  
    </BrowserRouter>   
  )
}

export default App