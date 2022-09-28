import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '1400px',
    height: '400px'
};

let center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent(props) {

    if (Object.keys(props).length > 0) {
        if (typeof props.Coor !== 'undefined') {
            center = props.Coor
        }
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [mapM, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        let MapX = mapM
        MapX = map.fitBounds(bounds);
        setMap(MapX)
    }, [mapM])

    const onUnmount = React.useCallback(function callback(map) {
        let MapX = mapM
        MapX = null
        setMap(MapX)
    }, [mapM])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)