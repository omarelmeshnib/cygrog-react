import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css'

import { Container } from './components/index'
import {Home , Profile} from './Pages/index'
import {Header, Footer , Slider} from './sections/Header/index'
// import YourGaming from './sections/YourGaming/YourGaming'


const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/browse' element={<Slider />} />
          
        </Routes>
    </Container>
    <Footer />
    </Router>
    </>
  )
}

export default App