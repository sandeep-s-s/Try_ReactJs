import React, { Component } from 'react'

class PostDetails extends Component {
  constructor (props) {
  	super(props)
  	this.titleWasClicked = this.titleWasClicked.bind(this)
  	this.toggleContent = this.toggleContent.bind(this)
  	this.state = {
  		toggleFlag: true
  	}
  }
  titleWasClicked (event) {
  	event.preventDefault()
  	console.log(this.props)
  }
  toggleContent (event) {
  	event.preventDefault()
  	this.setState({
  		toggleFlag: !this.state.toggleFlag
  	})
  }
  render () {
  	const { toggleFlag } = this.state
    const { post } = this.props
    return (
      <div>
        <b onClick={this.titleWasClicked}>{post.title} on {post.date}</b> {toggleFlag === true ? <p>{post.content}</p> : ''}
        <button onClick={this.toggleContent}>Toggle content</button>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default PostDetails
