import './Card.css'
import { AiTwotoneStar } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';

const Card = (props) => {

  return (
    <div className='most-popular-item' >
                <div className='card-wrapper' >
                    <img className='most-popular-item-image' src={props.image}  alt='notfound'  />
                    <div className='most-popular-item-content' >
                        <h4 className='most-popular-item-title' >
                            {props.title} <br></br>
                            <span>{props.category}</span>
                        </h4>
                        <ul>
                            <li><AiTwotoneStar className='star' /> <span>{props.rate}</span></li>
                            <li><FaDownload className='download' /> <span>{props.download}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Card