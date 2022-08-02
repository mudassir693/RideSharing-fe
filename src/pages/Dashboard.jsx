import React from 'react'
import MapComponent from '../component/MapComponent'

function Dashboard({socket}) {
  return (
    <div className="dashboard main w-[100%] h-[100vh]">
        <MapComponent socket={socket} />
    </div>
  )
}

export default Dashboard