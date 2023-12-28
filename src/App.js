import './App.css';
import  {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home.js"
import { Advocates } from "./pages/Advocates.js"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route to = {"/"} element={Home} />
        <Route to = {"/Advocates"} element={Advocates} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
