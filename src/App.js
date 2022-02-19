
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
