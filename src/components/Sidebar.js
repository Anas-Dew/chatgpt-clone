import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link
                            to="/admin"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Train</span>
                        </Link>
                        <Link to="/chat" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-area fa-fw me-3"></i><span>Chat</span>
                        </Link>
                        <Link to="/admin" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-area fa-fw me-3"></i><span>Admin</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Sidebar