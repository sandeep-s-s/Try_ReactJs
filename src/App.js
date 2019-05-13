import React, { Component } from 'react'
import './css/App.css'
import './css/bootstrap.css'
import './css/style.css'
import PostList from './posts/PostList'
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import TodoList from './components/TodoList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <MainSection />
        <PostList />
        <ProductList />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App
