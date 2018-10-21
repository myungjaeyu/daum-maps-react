import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

import load from 'load-script'

export default class DaumMap extends Component {

    static propTypes = {
        apiKey : PropTypes.string.isRequired,
        mapId : PropTypes.string.isRequired,
        render : PropTypes.func.isRequired
    }

    loadDaumMapScirpt(apiKey) {

        return new Promise(resolve => 
            window.daum ?
            resolve({ done : true, daum : window.daum }) 
            :
            load(`https://dapi.kakao.com/v2/maps/sdk.js?&autoload=false&appkey=${ apiKey }&libraries=services,clusterer,drawing`, err => 
                err ? 
                resolve({ done : false, err : err }) 
                : 
                resolve({ done : true, daum : window.daum })))
    }

    componentDidMount() {

        const { apiKey, mapId, render } = this.props

        this.loadDaumMapScirpt(apiKey)
            .then(e => 
                e.done && render(document.getElementById(mapId), daum))

    }

    render() {

        const { mapId } = this.props

        return (<div id={ mapId } className={ styles.daummap }></div>)

    }

}
