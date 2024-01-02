import './App.css';
import  {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home.js"
import { Advocates } from "./pages/Advocates.js"

function App() {
  return (
    <div className="App">
    <Router> 
      <Routes>
        <Route path= {"/"} element={<Home />} />
        <Route path = {"/Advocates/ :username"} element={<Advocates />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
