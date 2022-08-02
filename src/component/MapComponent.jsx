import React, { useEffect,useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// import 'mapbox-gl/dist/mapbox-gl.css'; 
import {io} from 'socket.io-client'



mapboxgl.accessToken = "pk.eyJ1IjoibXVoYW1tYWQtbXVkYXNzaXIiLCJhIjoiY2w1OWxlMnAxMGYwZjNjcDRzeWp5YnZtOSJ9.yovt1JF_3gAzGl2KAhK2qA"

function MapComponent() {
    let map;
    let socket

    const [cordinates,setCordinates] = useState({lng:"",lat:""})

    useEffect(()=>{

        socket = io("https://git.heroku.com/uber-dungeonmaster.git")
        // console.log(socket)
        // socket.on('first',()=>{
        //   console.log('socket works fine')
        //   socket.emit("second",{random: Math.random()})
        // })


        // //

        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);
        
            navigator.geolocation.getCurrentPosition(function(position) {
                clearTimeout(location_timeout);
        
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
        
                // geocodeLatLng(lat, lng);
                setCordinates({lng,lat})
                console.log('location is: ',{lat,lng})
            }, function(error) {
                clearTimeout(location_timeout);
                console.log('location cant find: ')

            });
        } else {
            // Fallback for no geolocation
            // geolocFail();
            console.log('location cant find: ')
        }

        map = new mapboxgl.Map({
            container: 'mapbox',
            style:"mapbox://styles/mapbox/streets-v11",
            center:[cordinates.lng,cordinates.lat],
            zoom:15
        })
        
    },[])
    // 


    useEffect(()=>{
        new mapboxgl.Marker()
            .setLngLat([cordinates.lng,cordinates.lat])
            .addTo(map);
    },[cordinates])
// 
    const setMarker = (map)=>{
        let marker = new mapboxgl.Marker()
                .setLngLat([67.1282601,24.9789795]).addTo(map);
            console.log(marker)
        }
    
    const trackLocation =async ()=>{
        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);
        
            navigator.geolocation.getCurrentPosition(function(position) {
                clearTimeout(location_timeout);
        
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
        
                // geocodeLatLng(lat, lng);
                setCordinates({lng,lat})
                console.log('location is: ',{lat,lng})
            }, function(error) {
                clearTimeout(location_timeout);
                console.log('location cant find: ')

            });
            
        } else {
            // Fallback for no geolocation
            // geolocFail();
            console.log('location cant find: ')
        }
        // console.log('it is workingfine')
        if(cordinates.lng!==''){
            socket.emit("first2",{
                cordinates,
            })
        }

        socket.on("accepted",(resp)=>{
            // console.log(resp)
        })
    }
    // trackLocation()//

    setInterval(()=>trackLocation(),5000)
  return (
    <div className="w-100vw h-[100%] relative" id="mapbox"></div>
  )
}

export default MapComponent