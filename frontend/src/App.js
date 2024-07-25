import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Navbar from "./Navbar";
import Create from './Create';
import ClassPage from './ClassPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/create" element = {<Create/>}/>
              <Route path="/class/:id" element={<ClassPage />} />

            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
