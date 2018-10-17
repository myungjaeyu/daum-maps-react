import React, { Component } from 'react'

import DaumMap from 'daum-maps-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <DaumMap text='Modern React component module' />
      </div>
    )
  }
}
