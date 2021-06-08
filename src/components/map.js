import React, { useContext, useEffect, useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { BacheContext } from '../components/bacheContext'
import axios from 'axios';



function GoogleMaps (props) {

  const center = {
    lat: 20.731447,
    lng: -103.453257
  }

  const style = {
    width: '75vw',
    height: '75vh',
  }

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCFqy0zNs8gFSwaK7SHiOas2DpSfvxJAHg"
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
    axios.get(`${process.env.API_CRUD}/api/potholes`).then(res=>setpotholes(res.data) ).catch(err => console.log(err))
  }, [])

  return isLoaded ? (
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={style}
        center={center}
        zoom={16}
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