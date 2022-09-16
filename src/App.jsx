import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact Us/Contact'
import Membership from './Pages/Membership/Membership'
import NotFound from './Pages/Not found/Notfound'
import Navbar from './Components/Navbar'
import Aboutus from './Pages/About Us/Aboutus'
import Footer from './Components/Footer'
import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>DripShow: Get your online store in 30 seconds!</title>
        <meta name='description' content='Get your online store started for free.' />
        <meta name='keywords' content='dropshiping, how to start drop shipping for free, how to start selling online, sell, onlinestore, shoping, search dripshow, dripshow, sell, seller, how dripshow works' />
      </Helmet>
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