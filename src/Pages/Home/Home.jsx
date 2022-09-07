import FAQs from '../../Components/FAQs'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Testimonials from '../../Components/Testimonials'
import Values from '../../Components/Values'
import Footer from '../../Components/Footer'
import './Home.css'


const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home