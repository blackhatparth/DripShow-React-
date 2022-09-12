import { Link } from "react-router-dom"
import Logo from '../Images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    info drip show
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/company/drip-show/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://www.facebook.com/Drop.Ship.Drip/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                    <a href="https://youtube.com/" target="_blank" rel='noreferrer noopener'><AiFillYoutube/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/membership">Membership</Link>
                <Link to="/products">Products</Link>
                <Link to="/company">Company</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">DripShow Plugins</Link>
                <Link to="/s">Privacy Policy</Link>
                <Link to="/s">Terms and Condition</Link>
                <Link to="/s">FAQs</Link>
                <Link to="/s">Blog</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/s">Jobs</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>@ 2022 Drip Show Pvt. Ltd. &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer