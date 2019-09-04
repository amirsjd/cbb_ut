import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

//const LoadingContainer = (props) => (<div>Showing where we are...</div>)

class GoogleMap extends Component {


    render() {    
        const style = {
            margin: '5px',
            filter: 'brightness(50%)',
            width: '24em',
            height: '18em',
            backgroundColor: 'rgba(black, 0.2)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '25px',
            boxShadow: '0 0 25px rgba(0,0,0,0.5)'
        }

        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={style}
                initialCenter={{
                    lat: 35.707,
                    lng: 51.395
                }}>
                
                <Marker position={{ lat: 48, lng: -122 }} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDKF97M5OZMl9QEN1wK99ZSrAMx9-ZWuxk'
})(GoogleMap)