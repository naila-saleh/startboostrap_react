import React from 'react'
import style from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg py-2 position-sticky top-0 ${style.navbar} `}>
            <div className="container">
                <a className="navbar-brand text-uppercase text-light fw-bolder fs-4" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-light text-uppercase fw-bolder active" aria-current="page" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light text-uppercase fw-bolder" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light text-uppercase fw-bolder" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
