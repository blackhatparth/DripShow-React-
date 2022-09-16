import { Link } from "react-router-dom"
import Logo1 from '../Images/logo1.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo1} alt="" />
                </Link>
                <p>
                A SaaS platform to create own ecommerce store, helps client find customers, boost sales revenue, and meet their day to day targets.
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/company/drip-show/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://www.facebook.com/Drop.Ship.Drip/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://instagram.com/dripshow.official/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Get Information</h4>
                <Link to="/AboutUs">About</Link>
                <Link to="/Membership">Membership</Link>
                <Link to="/company">Company</Link>
                <Link to="/Contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">DripShow Plugins</Link>
                <Link to="/s">Privacy Policy</Link>
                <Link to="/s">Terms and Condition</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/s">Jobs</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 Drip Show Pvt. Ltd. &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer