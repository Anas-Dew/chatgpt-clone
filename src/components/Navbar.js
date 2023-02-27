import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav id='nav-bar' className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" href="#">{props.heading}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" rel='noreferrer noopener' href="/">New Chat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" rel='noreferrer noopener' target={'_blank'} href="http://anasdew.tech/">Hire Anas Dew</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar