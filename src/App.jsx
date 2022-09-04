import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Careers from './Pages/Careers/Careers'
import Contact from './Pages/Contact Us/Contact'
import Comingsoon from './Pages/Coming Soon/Comingsoon'
import Delivery from './Pages/DripShow Delivery/delivery'
import Storelocator from './Pages/DripShow Store Locator/storelocator'
import Membership from './Pages/Membership/Membership'
import NotFound from './Pages/Not found/Notfound'
import Navbar from './Components/Navbar'
import Aboutus from './Pages/About Us/Aboutus'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Careers/>
      <Contact/>
      <Comingsoon/>
      <Delivery/>
      <Storelocator/>
      <Membership/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App