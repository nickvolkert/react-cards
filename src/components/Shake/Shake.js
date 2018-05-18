import React, { Component } from 'react'
import { Shake } from 'reshake'

class App extends Component {
  render () {
    return (
      <Shake
        h={0}
        v={0}
        r={0}
        dur={300}
        int={10}
        max={100}
        fixed={true}
        fixedStop={false}
        freez={false}>
      </Shake>
    )
  }
}
