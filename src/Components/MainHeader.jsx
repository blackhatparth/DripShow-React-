import {Link} from 'react-router-dom'
import Image from '../Images/main__header.jpg'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Let us come together as one</h4>
            <h1>10 Days of free trial</h1>
              <p>
                time is now to start your store.We support vocal for local.
                Made with love in India.
              </p>
              <Link to="/Membership" className= 'btn lg'>Get Started</Link>
       </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader