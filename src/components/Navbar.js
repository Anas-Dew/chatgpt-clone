import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav id='nav-bar' className={`navbar bg-${props.theme} fixed-top navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.text_theme}`} href="#">{props.heading}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link text-${props.text_theme}`} rel='noreferrer noopener' href="/">New chat</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-${props.text_theme}`} rel='noreferrer noopener' target={'_blank'} href="http://anasdew.tech/">Hire Anas Dew</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle text-${props.text_theme}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More apps
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" target={'_blank'} to="https://google2002.netlify.app/">Nostalgia Google</Link></li>
                                <li><Link class="dropdown-item" target={'_blank'} to="https://superurl.pythonanywhere.com/">SuperURL</Link></li>
                                <li><Link class="dropdown-item" target={'_blank'} to="https://phrase2word.netlify.app/">Phrase2Word</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" target={'_blank'} to="https://tally.so/r/nr5Arp">Feedback</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar