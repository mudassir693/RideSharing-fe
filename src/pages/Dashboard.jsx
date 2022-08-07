import React,{useState} from 'react'
import Header from '../component/Header/Header'
import MapComponent from '../component/MapComp/MapComponent'

function Dashboard({socket}) {
  const [locationAdded,setLocationAdded] = useState()
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 dashboard main w-[100%] h-[100vh]">
        <div className="sidebar hidden md:block col-span-3">
          <div className="text-3xl w-[100%] text-center my-2">Sidebar</div>
        </div>
        <div className="mapContainer col-span-12 md:col-span-9 w-[100%] h-[100%]">
          <MapComponent socket={socket} locationAdded={locationAdded} setLocationAdded={setLocationAdded} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard