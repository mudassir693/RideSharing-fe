import React,{useState} from 'react'
import Header from '../component/Header/Header'
import MapComponent from '../component/MapComp/MapComponent'
import axios from 'axios'
function Dashboard({socket}) {
  const [locationAdded,setLocationAdded] = useState()
  const [destination,setDestination] = useState({lng:'',lat:''})
  const [currentLocation,setCurrentLocation] = useState({lng:'',lat:''})
  const [locationSelected,setLocationSelected] = useState(false)
  const [destinationMarker,setDestinationMarker] = useState(null)
  const [directionSteps,setDirectionSteps] = useState([])
  const [distance,setDistance] = useState()


  const getDirections = async()=>{
    console.log('location from : ',currentLocation)
    console.log('location to : ',destination)

    const resp = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${currentLocation.lng}%2C${currentLocation.lat}%3B${destination.lng}%2C${destination.lat}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoibXVoYW1tYWQtbXVkYXNzaXIiLCJhIjoiY2w1OWxlMnAxMGYwZjNjcDRzeWp5YnZtOSJ9.yovt1JF_3gAzGl2KAhK2qA`)

    console.log('location steps: ',resp.data.routes[0].legs[0].steps)
    setDirectionSteps(resp.data.routes[0].legs[0].steps)
    setDistance(resp.data.routes[0].distance)
  }
  
  return (
    <div className="md:overflow-hidden">
      <Header />
      <div className="grid grid-cols-12 dashboard main w-[100%] h-[100vh] md:overflow-hidden">
        <div className="sidebar hidden md:block col-span-3 overflow-y-auto">
          <div className="text-3xl w-[100%] text-center my-2">
            Sidebar
          </div>
          {destination.lng!=='' && <div onClick={()=>{setDestination({lng:'',lat:''});;setDirectionSteps([])}} className="border-2 border-skyblue  mx-5 my-4 text-center py-2 rounded-lg">
            Reset Destination
          </div>}
          
          {destination.lng!=='' && <div onClick={()=>{getDirections()}} className="border-2 border-skyblue  mx-5 text-center py-2 rounded-lg">
            Get Direction
          </div>}
          {(destination.lng!=='' && distance !== 'NaN')  && <div onClick={()=>getDirections()} className="text-center text-3xl font-semibold my-3">
            {(distance/1000).toFixed(2)} km
          </div>}
          <div className="my-4">
                {destination.lng!=='' && directionSteps?.map((eachStep,id)=>(
                  <div key={id} onClick={()=>setDestination({lng:'',lat:''})} className="text-center my-1">
                      {eachStep.maneuver.instruction}
                    </div>
                  )) 
                }           
              </div>
          </div>
        <div className="mapContainer col-span-12 md:col-span-9 w-[100%] h-[80vh] md:h-[100%]">
          <MapComponent setCurrentLocation={setCurrentLocation} destinationMarker={destinationMarker} setDestinationMarker={setDestinationMarker} locationSelected={locationSelected} setLocationSelected={setLocationSelected} setDestination={setDestination} destination={destination} socket={socket} locationAdded={locationAdded} setLocationAdded={setLocationAdded} />
        </div>
        <div className="sidebar  md:hidden col-span-12 min-h-[20vh]">
          <div className="text-3xl w-[100%] text-center my-2">
            Sidebar
          </div>
          {destination.lng!=='' && <div onClick={()=>setDestination({lng:'',lat:''})} className="border-2 border-skyblue  mx-5 my-4 text-center py-2 rounded-lg">
            Reset Destination
          </div>}
          
          {destination.lng!=='' && <div onClick={()=>getDirections()} className="border-2 border-skyblue  mx-5 text-center py-2 rounded-lg">
            Get Direction
          </div>}
          {(destination.lng!=='' && (distance/1000)!==NaN)  && <div onClick={()=>getDirections()} className="text-center text-3xl font-semibold my-3">
            {(distance/1000).toFixed(2)} km
          </div>}
          <div className="my-5">
                {destination.lng!=='' && directionSteps?.map((eachStep,id)=>(
                  <div key={id} onClick={()=>setDestination({lng:'',lat:''})} className="text-center my-1">
                      {eachStep.maneuver.instruction}
                    </div>
                  )) 
                }           
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard