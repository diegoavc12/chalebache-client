import React, { useContext, useEffect, useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { BacheContext } from '../components/bacheContext'
import axios from 'axios';
import dotenv from 'dotenv';



function GoogleMaps (props) {

    const mapOptions = {
    zoom: 8,
    center: { lat: 20.6736, lng: -103.344},
  };

  const style = {
    width: '75vw',
    height: '75vh',

  }

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCFqy0zNs8gFSwaK7SHiOas2DpSfvxJAHg",
    libraries: "places"
  })

  const [map, setMap] = useState(null)
  const  [potholes, setpotholes] = useState([])

  const { setBache } = useContext(BacheContext)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback( map ) {
    setMap(null)
  }, [])

  const changeBache = (obj) => {
    setBache(obj)
  }

  useEffect(()=>{
    const API_CRUD="http://129.146.169.60:1441/"
    axios.get(`${API_CRUD}api/potholes/`).then(res=>setpotholes(res.data) ).catch(err => console.log("Error: "+API_CRUD))
  }, [])

  return isLoaded ? (
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={style}
        center={ mapOptions.center}
        zoom={8}
        onUnmount={onUnmount}
        

      >
        {potholes.map((pothole,i) => {
          return (<Marker
                    key={i}
                    onClick={() => changeBache(pothole)}
                    position={{lat: pothole.lat, lng: pothole.lng}}
                  />)
        })}
      </GoogleMap>
  ) : <></>
}

export default memo(GoogleMaps)