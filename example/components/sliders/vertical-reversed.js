import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class VerticalReversed extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 6
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  render () {
    const { value } = this.state
    return (
      <div className='vertical-slider'>
        <h4>Orientation &amp; Custom Styles</h4>
        <Slider
          min={0}
          max={10}
          value={value}
          orientation='vertical'
          reverse
          onChange={this.handleChange}
        />
        <div className='value'>Value: {value}</div>
        <hr />
      </div>
    )
  }
}

export default VerticalReversed
