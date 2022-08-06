import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

// import {io} from 'socket.io-client'
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import CarNavigation from './pages/CarNavigation';
// import 'mapbox-gl/dist/mapbox-gl.css'; 


function App() {
  return (
    <div className="">
      <BrowserRouter >
        <Routes >
          <Route path="/personalNavigation" element={<Dashboard socket="socket" />} />
          <Route path="/carNavigation" element={<CarNavigation socket="socket" />} />

          {/* <Dashboard socket="socket" /> */}
        </Routes>
      </BrowserRouter>
          <h1 className="">Hello Mudassir An exciting UBER clones</h1>
    </div>
  );
}

export default App;
