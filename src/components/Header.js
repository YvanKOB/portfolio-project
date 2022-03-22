import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div  className="header-wraper">
            <div className="main-info">
                <h1>Développement et promotion de sites web</h1>
                <Typed
                    className="typed-text"
                    strings={["Conception de sites web", "Développement web","Data Science", "Blockchain", "Apprentissage automatique", "Intelligence artificielle"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Me contacter</a>
            </div>

        </div>
    )
}

export default Header