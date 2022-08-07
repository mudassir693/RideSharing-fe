import React, { useEffect,useLayoutEffect,useMemo,useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// import 'mapbox-gl/dist/mapbox-gl.css'; 
import {io} from 'socket.io-client'

mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line



mapboxgl.accessToken = "pk.eyJ1IjoibXVoYW1tYWQtbXVkYXNzaXIiLCJhIjoiY2w1OWxlMnAxMGYwZjNjcDRzeWp5YnZtOSJ9.yovt1JF_3gAzGl2KAhK2qA"

function MapComponent({setLocationAdded,locationAdded}) {
    // let map;
    let socket
    // const [locationAdded,setLocationAdded] = useState(false)

    const [cordinates,setCordinates] = useState({lng:"",lat:""})
    const [usermarker,setUserMarker] = useState(null)
    const [map,setMap] = useState()
    // 

    useEffect(()=>{

        // socket = io("https://uber-dungeonmaster.herokuapp.com",{ transports: ['websocket'] })
        socket = io("http://localhost:5000")

        console.log(socket)

        let cor;
        var lat
        var lng;
        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);
        
            navigator.geolocation.getCurrentPosition(function(position) {
                clearTimeout(location_timeout);
        
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                
                cor={lng,lat}
                // geocodeLatLng(lat, lng);

                setCordinates({lng,lat})
                console.log('location is: ',{lat,lng})
            }, function(error) {
                clearTimeout(location_timeout);
                console.log('location cant find: ')

            });
        } else {
            console.log('location cant find: ')
        }

        var map1 = new mapboxgl.Map({
            container: 'mapbox',
            style:"mapbox://styles/mapbox/streets-v11",
            center:cordinates.lng!==''?[lng,lat]:[67.0011,24.8607],
            zoom:11
        })

        setMap(map1)

        var marker1 = new mapboxgl.Marker()
                .setLngLat([cordinates.lng,cordinates.lat]).addTo(map1);

        setUserMarker(marker1)

    },[])
    // 

    // useEffect(()=>{
    //    var map1 = new mapboxgl.Map({
    //         container: 'mapbox',
    //         style:"mapbox://styles/mapbox/streets-v11",
    //         center:cordinates.lng!==''?[cordinates.lng,cordinates.lat]:[67.0011,24.8607],
    //         zoom:17
    //     })

    //     setMap(map1)

    //     var marker1 = new mapboxgl.Marker()
    //             .setLngLat([cordinates.lng,cordinates.lat]).addTo(map1);

    //     setUserMarker(marker1)
    // },[])
// 
    useEffect(()=>{
        console.log('user move:..')
        if(usermarker){
            usermarker.remove()
        }
        const el = document.createElement('div');
        el.className = 'marker';

        var marker1 = new mapboxgl.Marker(el)
            .setLngLat([cordinates.lng,cordinates.lat]).addTo(map);

        setUserMarker(marker1)
    },[cordinates.lng,cordinates.lat])
    // 
    
    // map.on('movestart', () => {
    //     console.log('A movestart` event occurred.');
    // });
    // let map1 = new mapboxgl.Map({})

    // map?.on('movestart', () => {
    //     console.log('A movestart` event occurred.');
    // });

    // map.on('move', () => {
    //     console.log('A move event occurred.');
    // });

    // map1.on('moveend', () => {
    //     console.log('A moveend event occurred.');
    // });
// 

    // useEffect(()=>{
    //     console.log('b: cordinates change')
    //     new mapboxgl.Marker()
    //         .setLngLat(cordinates.lng!==''?[cordinates.lng,cordinates.lat]:[67.0011,24.8607])
    //         // .setLngLat([67.3644544,24.870912])
    //         .addTo(map);
    // },[cordinates])

    const setMarker = (map)=>{
        let marker = new mapboxgl.Marker()
                .setLngLat([67.1282601,24.9789795]).addTo(map);
            console.log(marker)
        }
// s

        // useMemo(()=>{
        //     console.log('what are you looking 4: ',cordinates.lng," ",cordinates.lat)
        //     new mapboxgl.Marker()
        //         .setLngLat([cordinates.lng,cordinates.lat])
        //         // .setLngLat([67.3644544,24.870912])
        //         .addTo(map);
        // },[cordinates.lat,cordinates.lng])
    
    let b=0
    const removeMarker = ()=>{
        
    }
    const trackLocation =async ()=>{
        
        let newCords;
        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);
        b+=1
        
        console.log('b: ',b)
            navigator.geolocation.getCurrentPosition(function(position) {
                clearTimeout(location_timeout);
        
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
        
                // geocodeLatLng(lat, lng);
                socket.emit("first2",{
                    cordinates:{lng,lat}
                })
                // 
                newCords={lng,lat}
                
                // new mapboxgl.Marker()
                //     .addTo(map)
                //     .remove()
                    // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';
                  
                console.log('location added: ', locationAdded)
                // make a marker for each feature and add to the map

                if(!locationAdded?.lng){
                    let nawteachnique = new mapboxgl.Marker(el).setLngLat([lng,lat]).addTo(map);
                    setLocationAdded(nawteachnique)
                }else{
                    locationAdded._updateMoving(()=>{
                        console.log('moving')
                    })
                    setLocationAdded()
// 
                    // new mapboxgl.Marker(el).setLngLat([lng,lat]);
                    // setLocationAdded(false)
                }
                //   
                setCordinates({lng,lat})
                console.log('location is: ',{lat,lng})
            }, function(error) {
                clearTimeout(location_timeout);
                console.log('location cant find: ')

            });
            // 
        } else {
            // Fallback for no geolocation
            // geolocFail();
            // 
            console.log('location cant find: ')
        }
        // console.log('it is workingfine')
        // if(cordinates.lng!==''){
        //   socket.emit("first2",{
        //         cordinates
        //     })
        // }

// 
        socket.on("accepted",(resp)=>{
            // console.log(resp)
        })

        // new mapboxgl.Marker()
                //     .addTo(map)
                //     .remove()
    }
    // trackLocation()//

    setInterval(()=>trackLocation(),5000)
    
  return (
    <div className="w-100vw h-[100%] relative" id="mapbox"></div>
  )
}

export default MapComponent