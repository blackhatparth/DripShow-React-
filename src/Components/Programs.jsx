import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Build Store in 3 Easy Steps :"/>
        </div>
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return <h4>Hi</h4>
                })
            }
        </div>  
    </section>
  )
}

export default Programs