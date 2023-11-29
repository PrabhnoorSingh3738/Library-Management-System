import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{borderBottom:"1px solid white"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
            <Link className="nav-item active nav-link text-white" to='/'>
                Home
            </Link>
            <Link className="nav-item active nav-link text-white" to='/books'>
                Books
            </Link>
            <Link className="nav-item active nav-link text-white" to='/addbooks'>
                Add Books
            </Link>
            </ul>
        </div>
        </nav>
    </div>
  )
}
