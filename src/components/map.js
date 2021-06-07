import React, { useContext, useEffect, useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { BacheContext } from '../components/bacheContext'
import axios from 'axios';

function GoogleMaps (props) {

  const center = {
    lat: 20.732,
    lng: -103.456
  }

  const style = {
    width: '75vw',
    height: '75vh',
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCK7OlpjunyTdWaF1NJ4RblpysJAWm1KBo"
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
    axios.get('http://localhost:3030/api/potholes').then(res=>setpotholes(res.data) ).catch(err => console.log(err))
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={style}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* <Marker
          position={{lat: 20.735, lng: -103.405}}
        /> */}
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
