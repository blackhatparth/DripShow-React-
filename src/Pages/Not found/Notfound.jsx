import {Link} from 'react-router-dom'
import './Notfound.css'
import video from '../../video/clouds.mp4'

const Notfound = () => {
  return (
    <section>
      <div className='main'>
        <video src={video} autoPlay loop muted />
      </div>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
    
  )
}

export default Notfound