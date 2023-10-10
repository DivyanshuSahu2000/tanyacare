import Navbar from './component/Navbar';


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import BeOurAffiliate from './component/BeOurAffiliate';
import FAQ from './component/FAQ';

function App() {
  return (
    <>
<Navbar/>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About Us' element={<AboutUs/>}/>
  <Route path='/Be Our Affiliate' element={<BeOurAffiliate/>}/>
  <Route path='/FAQ' element={<FAQ/>}/>
  <Route path='*' element={<Home/>}/>


  
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
