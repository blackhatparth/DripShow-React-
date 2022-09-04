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
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='Aboutus' element={<Aboutus/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Comingsoon' element={<Comingsoon/>}/>
        <Route path='Membership' element={<Membership/>}/>
        <Route path='Delivery' element={<Delivery/>}/>
        <Route path='Storelocator' element={<Storelocator/>}/>
        <Route path='Careers' element={<Careers/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App