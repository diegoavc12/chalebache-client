/* eslint-disable */
import React, { useContext, useEffect, useState, useCallback, memo } from 'react';
import { GoogleMap, Marker, HeatmapLayer, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { BacheContext } from '../components/bacheContext';
import { Button } from 'semantic-ui-react';
import { formatRelative, parseISO } from "date-fns";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import './styles/map.css';

const libraries = ['places', 'visualization'];

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function GoogleMaps() {
    const [show, setShow] = useState(false)
    const [lat, setLat] = useState(20.6736)
    const [lng, setLng] = useState(-103.344)
    const [selected, setSelected] = useState(null)
    const [zoom, setZoom] = useState(8)
    const mapRef = React.useRef()

    const mapOptions = {
        zoom: zoom,
        center: { lat: lat, lng: lng },
    };

    const heatMapOptions = {
        radius: 20,
    }

    const style = {
        width: '100vw',
        height: '75vh',

    }

    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        //AIzaSyCFqy0zNs8gFSwaK7SHiOas2DpSfvxJAHg
        googleMapsApiKey: "AIzaSyC0M7zIOzXcPAk2eS9IZaFZvbBYqKP50OA",
        libraries,
    })

    const [map, setMap] = useState(null)
    const [potholes, setpotholes] = useState([])
    const { data, setBache, bache } = useContext(BacheContext)

    const onLoad = useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
        mapRef.current = map
    }, [])

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        map.current.setZoom(14)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onLoadHeat = heatmapLayer => {
        console.log('HeatmapLayer onLoad heatmapLayer: ', heatmapLayer)
    }

    const onUnmountHeat = heatmapLayer => {
        console.log('HeatmapLayer onUnmount heatmapLayer: ', heatmapLayer)
    }

    const changeBache = (obj) => {
        setBache(obj)
        setLat(obj.lat)
        setLng(obj.lng)
        mapRef.current.setZoom(32)
    }

    useEffect(() => {
        if (!isEmpty(bache)) {
            setSelected(bache)
            setLat(bache.lat)
            setLng(bache.lng)
            mapRef.current.setZoom(32)
        }
    }, [bache])

    const heatMapData = React.useMemo(() => {
        data.forEach(pothole => {
            potholes.push(new google.maps.LatLng(pothole.lat, pothole.lng))
        });
        return potholes
    }, [])

    const tooggleHeatMap = () => {
        setShow(!show)
    }

    const resetMap = () => {
        setBache({})
        mapRef.current.setZoom(8)
        setLat(20.6736)
        setLng(-103.344)
        setSelected(null)
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? (
        <div>
            <Button.Group className="heat-btn">
                <Button toggle primary active={show} onClick={tooggleHeatMap} size="large" >Térmico</Button>
                <Button.Or />
                <Button primary onClick={resetMap} size="large">Reiniciar</Button>
            </Button.Group>
            <Search panTo={panTo} />
            <GoogleMap
                onLoad={onLoad}
                mapContainerStyle={style}
                center={mapOptions.center}
                zoom={mapOptions.zoom}
                onUnmount={onUnmount}
            >
                {data.map((pothole, i) => {
                    if (pothole.type === 'Automatic') {
                        return (<Marker
                            key={i}
                            onClick={() => {
                                setSelected(pothole)
                                changeBache(pothole)
                            }}
                            position={{ lat: pothole.lat, lng: pothole.lng }}
                            icon={{
                                url: require("./imgs/chale3.png").default,
                                scaledSize: new window.google.maps.Size(30, 30),
                            }}
                            visible={!show}
                        />)
                    } else {
                        return (<Marker
                            key={i}
                            onClick={() => {
                                setSelected(pothole)
                                changeBache(pothole)
                            }}
                            position={{ lat: pothole.lat, lng: pothole.lng }}
                            icon={{
                                url: require("./imgs/chale2.png").default,
                                scaledSize: new window.google.maps.Size(30, 30),
                            }}
                            visible={!show}
                        />)
                    }
                })}
                {show && <HeatmapLayer onLoad={onLoadHeat} onUnmount={onUnmountHeat} data={heatMapData} options={heatMapOptions} />}
                {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => {
                    setSelected(null);
                }}>
                    <div id='infoModal'>
                        <h2>Datos del Bache</h2>
                        <p><b>ID:</b> {selected.id}</p>
                        <p><b>Primera detección:</b> {formatRelative(parseISO(selected.firstIncident), new Date())}</p>
                        <p><b>Última detección:</b> {formatRelative(parseISO(selected.lastIncident), new Date())}</p>
                        <p><b>Detecciones totales:</b> {selected.numIncidents}</p>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    ) : <></>
}

function Search({ panTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 20.6736, lng: () => -103.344 },
            radius: 200 * 1000,
        },
    })
    return (<div className="search">
        <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <Combobox onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
                const results = getGeocode({ address });
                const { lat, lng } = await getLatLng(results[0]);
                console.log("📍 Coordinates: ", { lat, lng });
                panTo({ lat, lng });

            } catch (error) {
                console.log(error);

            }
            console.log(address);
        }}>
            <ComboboxInput value={value} onChange={(e) => {
                setValue(e.target.value);
            }} disabled={!ready} placeholder="Ingresa una dirección" />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    </div>
    )
}

export default memo(GoogleMaps)