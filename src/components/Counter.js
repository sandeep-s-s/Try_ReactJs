import React, { Component } from 'react'

class Counter extends Component {
  constructor () {
    super()
    this.state = {
    	count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
  	this.setState(prevState => {
  		return {
        	count: prevState.count + 1
      	}
  	})
  }
  render () {
    const { count } = this.state
    return (
      <div>
        <h1>counter</h1>
        <h1>{count}</h1>
        <button onClick={this.handleClick} className='btn btn-info'>change !</button>
      </div>
    )
  }
}

export default Counter
