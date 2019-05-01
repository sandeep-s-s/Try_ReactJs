import React, { Component } from 'react'
import './App.css'
import PostList from './posts/PostList'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <PostList />
        <Footer />
      </div>
    )
  }
}

export default App
