import React from 'react'

function Header () {
  return (
    <div>
      <nav>
        <ul>
          <li><a href='http://localhost:3000/'>Home</a></li>
          <li><a href='http://localhost:3000/'>About</a></li>
          <li><a href='http://localhost:3000/'>Contact</a></li>
        </ul>
      </nav>
      <h2 className='text-danger'>Home Page</h2>
      <br />
    </div>
  	)
}

export default Header
