import {MdSell} from 'react-icons/md'
import SectionHead from './SectionHead'

const Steps = () => {
  return (
    <section className="steps">
        <div className="container steps__container">
            <SectionHead icon={<MdSell/>} title="Steps"/>
        </div>
        <div className="steps__wrapper">
          
        </div>
    </section>
  )
}

export default Steps