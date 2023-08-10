import './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <div className='setion-header' >
            <h4>{props.children}</h4>
        </div>
  )
}

export default SectionHeader