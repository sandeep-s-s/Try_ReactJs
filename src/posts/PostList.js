import React, { Component } from 'react'

import PostDetails from './PostDetails'
import PostData from '../data/posts.json'

class PostList extends Component {
  render () {
    return (
      <div >
        <ul>
          {PostData.map((data, i) => (
            <PostDetails post={data} key={`post-list-key ${i}`} />
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList
