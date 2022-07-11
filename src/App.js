import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';
import DataQuality from './components/DataQuality/dataQuality';
import Analytics from './components/Analytics/analytics';
import MobileAndWebRoute from './components/MobileAndWebRoute/mobileAndWebRoute';
import CloudComputing from './components/CloudComputing/cloudComputing';
import SAPB1 from './components/SAPB1/sapb1';

const App = () => (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<About/>} />
      <Route exact path="/contact-us" element={<Contact/>} />
      <Route exact path="/services/data-quality" element={<DataQuality />} />
      <Route exact path='/services/analytics' element={<Analytics />} />
      <Route exact path='/services/web-and-mobile-app-development' element={<MobileAndWebRoute />} />
      <Route exact path='/services/cloud-computing' element={<CloudComputing />} />
      <Route exact path='/sap' element={<SAPB1 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
)

export default App;
