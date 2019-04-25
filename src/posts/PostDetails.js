import React, { Component } from 'react'

class PostDetails extends Component {
  render () {
    const { post } = this.props
    return (
      <div>
        <b>{post.title} on {post.date}</b> :{post.content}
      </div>
    )
  }
}

export default PostDetails
