import React from 'react'

const Sidebar = () => {
    return (
        <>
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <a
                            href="/"
                            class="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Train</span>
                        </a>
                        <a href="/" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Chat</span>
                        </a>
                        <a href="/" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Admin</span>
                        </a>
                    </div>
                </div>
            </nav>

            <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {/* <i class="fas fa-bars"></i> */}
                Click Me
            </button>
        </>

    )
}

export default Sidebar