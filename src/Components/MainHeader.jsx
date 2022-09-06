import {Link} from 'react-router-dom'
import Image from '../Images/main__header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Hello Entrepreneur! , Start Your Journey with us</h4>
            <h1>Start Selling, Leave Backend On Us!</h1>
              <p>
                Time is now to start your own store (Do remember what Kabir said, not Singh).
                <p>Made with love in India.</p>
              </p>
              <Link to="/Membership" className= 'btn lg'>Get Started</Link>
       </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader