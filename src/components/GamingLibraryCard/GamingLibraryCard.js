import './GamingLibraryCard.css'
import {PrimaryButton} from '../index'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card' >
        <ul>
            <li> <img src={props.image} alt='notfound'/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date Added</h4><span>{props.date_add}</span></li>
            <li><h4>Hour Played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>
            <PrimaryButton>Download</PrimaryButton>
        </ul>
    </div>
  )
}

export default GamingLibraryCard