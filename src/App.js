import './App.css';

// import {io} from 'socket.io-client'
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
// import 'mapbox-gl/dist/mapbox-gl.css'; 


function App() {
  return (
    <div className="">
      <Dashboard socket="socket" />
      <h1 className="">Hello Mudassir An exciting UBER clones</h1>
    </div>
  );
}

export default App;
