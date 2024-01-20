import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Haberler from './Haberler'
import Kentsel from './Kentsel'
import MeramBel from './MeramBel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>

      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/merambel' element={<MeramBel/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/haberler' element={<Haberler/>} />
      <Route path='/kentsel' element={<Kentsel/>} />
      

      </Routes>

      </div>
  );
};

export default App