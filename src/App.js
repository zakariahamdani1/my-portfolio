import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Box, HStack, Button } from "@chakra-ui/react";
import Headers from './Headers';
import Home from './Home';
import Footers from './Footers';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
      <Footers/>
    </BrowserRouter>
  );
}

export default App;
