import Header from '../../Components/Header'
import HeaderImage from '../../Images/contact.png'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image={HeaderImage}>
      In case of any......
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:dripshow.official@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://m.me/Drop.Ship.Drip" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+917376556745" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact