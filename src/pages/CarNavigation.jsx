import React from 'react'
import CarNavigationmapComponent from '../component/CarNavigationComponent/CarNavigationmapComponent'
// import MapComponent from '../component/MapComp/MapComponent'
import Header from './../component/Header/Header';

export default function CarNavigation() {
  return (
    <div>
      <Header />
        <div className="mapComponent grid grid-cols-12 w-[100%] h-100vh">
            <div className="carNavigationSidebar md:block col-span-3 hidden">
                car is ...
            </div>
            <div className="carNavigationmapComponent col-span-12 md:col-span-9 w-[100%] h-[100vh]">
                <CarNavigationmapComponent />
            </div>
        </div>
    </div>
  )
}
