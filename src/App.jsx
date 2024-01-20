import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Cartdetails from './components/Cartdetails'
import {Routes ,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path='/cart' element={<Cartdetails />}  />
      </Routes>
      
      
    </>
  )
}

export default App
