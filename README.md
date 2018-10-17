# daum-maps-react

> 

[![NPM](https://img.shields.io/npm/v/daum-maps-react.svg)](https://www.npmjs.com/package/daum-maps-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM Badge](https://nodei.co/npm/daum-maps-react.png?downloads=true)](https://www.npmjs.com/package/daum-maps-react)

## Install

```bash
npm install --save daum-maps-react
```

## Demo 
- https://myungjaeyu.github.io/daum-maps-react/index.html

## Usage

```jsx
import React, { Component } from 'react'

import DaumMap from 'daum-maps-react'

class Example extends Component {

    customRender = (element, daum) => {

        console.log(element, daum, this) // map element, daum api, Example Component

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
            <div style={ { width: '500px', height: '500px' }}>

                <DaumMap
                    apiKey='YOUR_API_KEY'
                    mapId={ 'daum-map' }
                    render= { this.customRender }
                />

            </div>
        )
    }
}
```

## License

MIT © [myungjaeyu](https://github.com/myungjaeyu)
