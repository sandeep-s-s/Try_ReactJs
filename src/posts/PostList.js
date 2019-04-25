import React, { Component } from 'react'

import PostData from '../data/posts.json'

class PostList extends Component {
  render () {
    return (
      <div >
        <h1>React Js</h1>
        <ul>
          {PostData.map((data, i) => (
            <div key={i}>
              <b>{data.title} on {data.date}</b> :
              {data.content}
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList
