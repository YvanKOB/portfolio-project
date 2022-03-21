import React from "react";
import alpha2 from "../alpha2.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

            <a className="navbar-brand" href="#"><img className="logo" src={alpha2} alt="logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">À mon propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mes services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mes outils</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mon portfolio</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Me contacter</a>
                    </li>


                </ul>

            </div>
            </div>
        </nav>
    )
}

export default Navbar