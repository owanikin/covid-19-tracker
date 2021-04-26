import React from 'react'
import './Map.css'
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({ countries, casesType, center, zoom }) {
    function ChangeView({ center, zoom }) {
        const map = useMap()
        map.setView(center, zoom)
        return null
    }
    return (
        <div className="map">
            <MapContainer 
            casesType={casesType}
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}>
                <ChangeView center={center} zoom={zoom} />
                <TileLayer 
                    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </div>
    )
}

export default Map
