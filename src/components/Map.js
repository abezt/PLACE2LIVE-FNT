import React, { useState } from "react";
import './map_style.css';
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import properties from "../properties.json";

function MapComponent() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
        <section>
            <div class="mapLoc">
                <GoogleMap 
                    defaultZoom={12}
                    defaultCenter={{ lat: 43.4739, lng: -80.5274 }}
                >
                    {properties.map(property => (
                        <Marker 
                            key={property.id} 
                            position={{
                                lat: property.lat, 
                                lng: property.lng
                            }}
                            icon={{
                                
                                scaledSize: new window.google.maps.Size(25, 25)
                            }}
                            onClick ={() => {
                                setSelectedProperty(property);
                            }}
                        />
                    ))}

                    {selectedProperty && (
                        <InfoWindow
                            position={{
                                lat: selectedProperty.lat, 
                                lng: selectedProperty.lng
                            }}
                            onCloseClick={() => {
                                setSelectedProperty(null);
                            }}
                        >
                            <div>
                                <h4 style={{color: "black"}}>{selectedProperty.name}</h4>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </section>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function Map() {
    return (
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAd27LXaah9N-m79CAWr-_QU8Sm-r_rdeg`}
            loadingElement={<div style={{ height:"100%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}
        />
    )
}

export default Map;