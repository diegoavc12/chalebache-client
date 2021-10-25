/* eslint-disable */
import React, { useContext, useEffect, useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker, HeatmapLayer, LoadScriot, InfoWindow } from '@react-google-maps/api';
import { BacheContext } from '../components/bacheContext'
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import dotenv from 'dotenv';
import {formatRelative, parseISO } from "date-fns"


function GoogleMaps({styles}) {

  const [show, setShow] = useState(false)
  const [lat, setLat] = useState(20.6736)
  const [lng, setLng] = useState(-103.344)
  const [selected, setSelected] = useState(null)
  const  [zoom, setZoom] = useState(8)
  const mapRef = React.useRef()

    const mapOptions = {
    zoom: zoom,
    center: { lat: lat, lng: lng},
  };

  const style = {
    width: '75vw',
    height: '75vh',

  }

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCFqy0zNs8gFSwaK7SHiOas2DpSfvxJAHg",
    libraries: ["places", "visualization"]
  })

  const [map, setMap] = useState(null)
  const  [potholes, setpotholes] = useState([])

  const { setBache } = useContext(BacheContext)

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map)
    mapRef.current= map
  }, [])

  const onUnmount = useCallback(function callback( map ) {
    setMap(null)
  }, [])

  const changeBache = (obj) => {
    setBache(obj)
    setLat(obj.lat)
    setLng(obj.lng)
  }

  useEffect(()=>{
    const API_CRUD="http://129.146.169.60:1441/"
    axios.get(`${API_CRUD}api/potholes/`).then(res=>setpotholes(res.data) ).catch(err => console.log("Error: "+API_CRUD))
  }, [])

  const heatMapData ={ 
    position:[
      {lat: 20.618683, lng: -103.4694},
      {lat: 20.610081, lng: -103.466737},
      {lat: 20.618683, lng: -103.4694},
      {lat: 20.618683, lng: -103.4694}
    ]
  }
  
  potholes.forEach(pothole => {
    heatMapData.position.push({lat:pothole.lat, lng:pothole.lng})
  });

  const tooggleHeatMap=() =>{
    setShow(!show)
    if(this._googleMap!== undefined){
      this._googleMap.setMap(map)
    }
  }


  return isLoaded ? (
    <div>
      <Button>HeatMap</Button>
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={style}
        center= { mapOptions.center}
        zoom={mapOptions.zoom}
        onUnmount={onUnmount} 

      >
        {potholes.map((pothole,i) => {
          return (<Marker
                    key={i}
                    onClick={() => {
                    changeBache(pothole)
                    setSelected(pothole)
                    }}
                    position={{lat: pothole.lat, lng: pothole.lng}}
                    icon ={{
                      url:require('./imgs/chale2.png').default,
                      scaledSize: new window.google.maps.Size(30,30),
                      // origin: new window.google.maps.Point(0,0),
                      // anchor: new window.google.maps.Point(15.15)
                    }}
                  />)
        })}
         {/* <HeatmapLayer onLoad={onLoad} onUnmount={onUnmount}      data={[
  new google.maps.LatLng(37.782, -122.447),
  new google.maps.LatLng(37.782, -122.445),
  new google.maps.LatLng(37.782, -122.443),
  new google.maps.LatLng(37.782, -122.441),
  new google.maps.LatLng(37.782, -122.439),
  new google.maps.LatLng(37.782, -122.437),
  new google.maps.LatLng(37.782, -122.435),
  new google.maps.LatLng(37.785, -122.447),
  new google.maps.LatLng(37.785, -122.445),
  new google.maps.LatLng(37.785, -122.443),
  new google.maps.LatLng(37.785, -122.441),
  new google.maps.LatLng(37.785, -122.439),
  new google.maps.LatLng(37.785, -122.437),
  new google.maps.LatLng(37.785, -122.435)
]} /> */}

      {selected?(<InfoWindow position={{lat:selected.lat, lng: selected.lng}} onCloseClick={() =>{
        setSelected(null);
      }}>
        <div>
          <h2>Banche encontrado</h2>
          <p>Dia: {formatRelative(parseISO(selected.createdAt), new Date())}</p>
        </div>
      </InfoWindow>):null}
      </GoogleMap>
      
    </div>

  ) : <></>
}

export default memo(GoogleMaps)