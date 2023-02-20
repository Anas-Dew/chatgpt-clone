import React from 'react'

const Navbar = (props) => {
    const ShowBar = () => {
        let bar = document.getElementById('sidebarMenu')
        if (bar.style.display === 'block') {
            bar.style.display = 'none';
        } else {
            bar.style.display = 'block'
        }
    }
    return (
        <nav className="flex-row-reverse navbar bg-light fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.heading}</span>
            </div>
            <button id='nav-button' onClick={ShowBar} className='d-flex position-absolute mx-2 navbar-toggler'
                type="button"
            >
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    )
}

export default Navbar