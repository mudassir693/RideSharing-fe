import React,{useState} from 'react'
import MapComponent from '../component/MapComponent'

function Dashboard({socket}) {
  const [locationAdded,setLocationAdded] = useState()
  return (
    <div className="dashboard main w-[100%] h-[100vh]">
        <MapComponent socket={socket} locationAdded={locationAdded} setLocationAdded={setLocationAdded} />
    </div>
  )
}

export default Dashboard