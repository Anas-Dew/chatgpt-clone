import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav id='nav-bar' class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand text-light" href="#">{props.heading}</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light" rel='noreferrer noopener' target={'_blank'} href="http://anasdew.tech/">Hire Anas Dew</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar