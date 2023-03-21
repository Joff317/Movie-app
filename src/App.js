import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LikePage from "./pages/LikePage";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="coup-de-coeur" element={<LikePage/>}/>
    <Route path="*" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
