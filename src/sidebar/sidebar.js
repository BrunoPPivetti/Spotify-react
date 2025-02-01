import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../reset.css"
import "./sidebar.css"
import logospotify from "../assets/icons/logo-spotify.png"

const Sidebar = () => {
    return(
        
            <div className="sidebar">
                <nav className="sidebar__navigation">
                    <div className="logo">
                        <a>
                            <img src={logospotify} alt="logo spotify"/>
                        </a>
                    </div>

                        <ul>
                            <li>
                                <a href="">
                                    <span className="fa fa-home"></span>
                                    <span className="home-text">Ínicio</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="fa fa-search"></span>
                                    <span className="search-text">Buscar</span>
                                </a>
                            </li>
                        </ul>
                </nav>

                <div className="library">
                    <div className="library__content">
                        <button className="library__button">
                            <span className="bi bi-file-text-fill"></span>
                            <span>Sua biblioteca</span>
                        </button>
                        <span className="fa fa-plus"></span>
                    </div>

                    <section className="playlist-section">
                        <div className="playlist-section__content">
                                <span className="text title">Crie sua primeira playlist</span>
                                <span className="text subtitle">É fácil, vamos te ajudar.</span>
                                <button className="playlist-section__button">
                                    <span>Criar playlist</span>
                                </button>
                        </div>
                    </section>

                    <div className="cookies">
                        <a>Cookies</a>
                    </div>

                    <div className="language">
                        <button className="language__button">
                            <span className="fa fa-globe"></span>
                            <span className="button__text">Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
       
    )
}

export default Sidebar