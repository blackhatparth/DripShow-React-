import {MdSell} from 'react-icons/md'

const Steps = () => {
  return (
    <section className="steps">
        <div className="container steps__container">
            <div className="steps__head">
                <span>{<MdSell/>}</span>
                <h2>Open Store in 3 Easy Steps:</h2>
            </div>
        </div>
    </section>
  )
}

export default Steps