import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapStyles = {
      height: '400px',
      width: '100%',
    };
  
    const defaultCenter = {
      lat: 9.760509, // Replace with your factory's latitude
      lng: 79.971550 // Replace with your factory's longitude
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAJCBXRLXtGxYFzLM4fjdKUeUQgczb_gQw">
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default Map;
  