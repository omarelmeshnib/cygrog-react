import './YourGaming.css'
import { GamingLibraryCard,SectionHeader , SectionWrapper} from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'



const YourGaming = () => {

  const cards = GamingLibraryData.map(function(card){
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_add={card.date_add} download={card.download} />
  })

  return (
    <SectionWrapper>
        <SectionHeader>Your Gaming</SectionHeader>
        <div className='gaming-library-cards' >
            {cards}
        </div>
    </SectionWrapper>
  )
}

export default YourGaming