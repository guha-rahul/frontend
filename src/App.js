import "./App.css";

import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OpenAi from "./Components/OpenAi";




function App() {

  return (
    <div className="bg-[url(https://us.123rf.com/450wm/litvinovaelena86/litvinovaelena861811/litvinovaelena86181101488/112092012-blockchain-technology-background-bussines-concept-banner-blue-digital-pattern-blockchain-vector.jpg)] w-screen h-screen bg-no-repeat bg-cover">
      <div className="flex items-center justify-between p-2 bg-gradient-to-r from-indigo-600 via-blue-800 to-purple-700">
        <p className="text-white text-xl "><a href="/">Open Ai</a></p>
    
      </div>
      
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Homepage />} />
        <Route path="/Generate" element={<OpenAi />} />
      </Routes>
      </BrowserRouter>
        
      
    </div>

  );
}

export default App;
