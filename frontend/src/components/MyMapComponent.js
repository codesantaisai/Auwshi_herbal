import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const MyMapComponent = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 9.760509, // Replace with your desired latitude
    lng: 79.971550, // Replace with your desired longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAJCBXRLXtGxYFzLM4fjdKUeUQgczb_gQw">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
