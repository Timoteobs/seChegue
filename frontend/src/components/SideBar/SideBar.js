import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  return (
      <aside className='main-sidebar sidebar-light-primary elevation-4 sidebar-custom'>
        <section className='sidebar'>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info user-text">
              <a href="#" className="d-block" >Timoteo Barros</a>
            </div>
          </div>
        </section>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to="/main" className="nav-link">
                <i className={`nav-icon fa fa-user-friends`}></i>
                <p>Amigos</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className={`nav-icon fa fa-user-plus`}></i>
                <p>Solicitações de Amizade</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className={`nav-icon fa fa-users`}></i>
                <p>Salas</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className={`nav-icon fa fa-sign-out-alt`}></i>
                <p>Sair</p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
  )
}

export default SideBar;