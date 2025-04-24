import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Login1 from "./components/Login1"
import Choice from "./components/Choice";
import Bonesandjoints from "./components/Bonesandjoints";
import Child from "./components/Child";
import Dental from "./components/Dental";
import Gphy from "./components/Gphy";
import Skinandhair from "./components/Skinandhair";
import Women from "./components/Women";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <> 
   
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Choice" element={<Choice/>} />
    <Route path="/Dental" element={<Dental/>} />
    <Route path="/Gphy" element={<Gphy/>} />
    <Route path="/Bonesandjoints" element={<Bonesandjoints/>} />
    <Route path="/Child" element={<Child/>} />
    <Route path="/Skinandhair" element={<Skinandhair/>} />
    <Route path="/Women" element={<Women/>} />
    <Route path="/Login1" element={<Login1/>} />
  </Routes>
</Router>  




      
      
      </>
    </div>
  )
}

export default App
