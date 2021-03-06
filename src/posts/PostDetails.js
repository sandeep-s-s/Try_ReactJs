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
        <b onClick={this.titleWasClicked}>{post.title} </b> on  {post.date} {toggleFlag === true ? <p>{post.content}</p> : ''}
        <p><button className='btn btn-success btn-sm' onClick={this.toggleContent}>Toggle Details</button>
        </p>
      </div>
    )
  }
}

export default PostDetails
