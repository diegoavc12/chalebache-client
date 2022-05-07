import React from 'react';
import './styles/searchBar.css';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function App(props) {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        props.center(latLng)
    };

    function modifyValues() {
        if (coordinates.lat != null) {
            var locValues = {
                lat: coordinates.lat,
                lng: coordinates.lng
            }
        }
        console.log(locValues)
    }
    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="searchBar">
                        <div className="size">
                            <input {...getInputProps({ placeholder: "Busca una dirección", id: "location" })} />
                            {modifyValues()}
                            {console.log(coordinates.lat)}
                            {console.log(coordinates.lng)}
                        </div>

                        <div>
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };
                                return (

                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}