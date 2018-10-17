import React, { Component } from 'react'

import DaumMap from 'daum-maps-react'

export default class App extends Component {

    customRender = (element, daum) => {

        console.log(element, daum, this)


        const lat = 37.503716, lng = 127.044844

        daum.maps.load(_ => {

            const map = new daum.maps.Map(element, {
                center: new daum.maps.LatLng(lat, lng),
                level: 3
            })
    
            const marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(lat, lng)
            })

            marker.setMap(map)

        })

    }

    render () {
        return (
            <div>

                <div style={ { width: '500px', height: '500px' }}>

                    <DaumMap
                        apiKey='0818f03a98ecd1d911780003319345c2'
                        mapId={ 'daum-map' }
                        render= { this.customRender }
                    />

                </div>

            </div>
        )
    }
}
