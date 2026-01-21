import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";
import Wheelchair from "./pages/Wheelchair";
import Maruti1 from "./pages/Maruti1";
import Maruti2 from "./pages/Maruti2";
import WarehouseRobot from "./pages/WarehouseRoboT";
import EducationalRobot from "./pages/EducationalRobot";
import Chelonia from "./pages/Chelonia";
import CheloniaB1 from "./pages/CheloniaB1";
import CheloniaB2 from "./pages/CheloniaB2";
import CheloniaA from "./pages/CheloniaA";
import Bhuja from "./pages/Bhuja";
import BioInspired from "./pages/BioInspired";
import Smorphi from "./pages/Smorphi";
import SmorphiV2 from "./pages/SmorphiV2";
import Smorphi2 from "./pages/Smorphi2";
import CheloniaManual from "./pages/B1Experiment";
import CheloniaManualb2 from "./pages/B2Experiment";
import CheloniaManualA from "./pages/AExperiment";
import Scorpine from "./pages/Scorpine";
import Cancero from "./pages/Cancero";
import Spidera from "./pages/Spidera";
import CoursesDetails from "./pages/CoursesDetails";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/wheelchair" element={<Wheelchair/>} />
          <Route path="/maruti1" element={<Maruti1/>} />
           <Route path="/maruti2" element={<Maruti2/>} />
          <Route path="/warehouse" element={<WarehouseRobot/>} />
          <Route path="/education" element={<EducationalRobot/>} />
          <Route path="/chelonia" element={<Chelonia/>} />
          <Route path="/cheloniab1" element={<CheloniaB1/>} />
          <Route path="/cheloniab2" element={<CheloniaB2/>} />
           <Route path="/cheloniab3" element={<CheloniaA/>} />
           <Route path="/bhuja" element={<Bhuja/>} />
            <Route path="/bioinspired" element={<BioInspired/>} />
            <Route path="/smorphi" element={<Smorphi/>} />
            <Route path="/smorphiv2" element={<SmorphiV2/>} />
            <Route path="/smorphi2" element={<Smorphi2/>} />
             <Route path="/B1-CheloniaManual" element={<CheloniaManual/>} />
             <Route path="/B2-CheloniaManual" element={<CheloniaManualb2/>} />
             <Route path="/A-CheloniaManual" element={<CheloniaManualA/>} />
             <Route path="/scorpine" element={<Scorpine/>} />
             <Route path="/cancero" element={<Cancero/>} />
             <Route path="/spidera" element={<Spidera/>} />
             <Route path="/courses-details" element={<CoursesDetails/>} />
        </Routes>
    </Router>
  );
}

export default App;
