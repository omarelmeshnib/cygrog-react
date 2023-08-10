import './Mostpopular.css'
import { Card , SectionHeader , SectionWrapper} from '../../components/index'
import mostpopularData from '../../Data/MostpopularData'




const Mostpopular = () => {

  
  const cards = mostpopularData.map(function(card){
    return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  })

  return (
    <SectionWrapper>
        <SectionHeader> Most popular </SectionHeader> 
        <div className='most-popular-items' >
            {cards}
        </div>
    </SectionWrapper>
  )
}

export default Mostpopular

