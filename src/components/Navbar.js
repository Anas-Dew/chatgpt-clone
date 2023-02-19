import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar bg-light fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.heading}</span>
            </div>
        </nav>
    )
}

export default Navbar