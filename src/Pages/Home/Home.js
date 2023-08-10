import './Home.css'

import {Hero} from '../../components/index'
import {Mostpopular} from '../../sections/Header/index'
import YourGaming from '../../sections/YourGaming/YourGaming'

const Home = () => {
  return (
    <>
    <Hero />
    <Mostpopular />
    <YourGaming />
    </>
  )
}

export default Home