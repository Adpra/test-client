import React from 'react'

const Sidebar = () => {
    return (
        <div>
                
                            {/* Main Sidebar Container */}
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                       
                        {/* SidebarSearch Form */}
                        <div className="form-inline mt-3">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                            </div>
                        </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                            with font-awesome or any other icon font library */}
                            <li className="nav-item">
                            <a href="/" className="nav-link">
                            <i class="nav-icon fas fa-table"></i>
                                <p>
                                Data Barang
                                </p>
                            </a>
                            
                            </li>
                            
                        </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                    </aside>


        </div>
    )
}

export default Sidebar
