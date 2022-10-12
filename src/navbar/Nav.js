import React from 'react';
import Carousel from '../carousel/Carousel';
// import {Link} from 'react-router-dom'
import './Nav.css';
function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark navbar-expand-md navbar-expand-ms">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/img/logodesa.png" width={100}/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link text-white active" aria-current="page" href='/'>Beranda</a>
                    </li>
                    <li class="nav-item">
                    <a className="nav-link text-white" href="#">Profil</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pelayanan
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item " href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Kontak</a>
                    </li>
                </ul>
                {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Cari" aria-label="Search" />
                    <button class="btn-search px-3" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg></button>
                </form> */}
                </div>
            </div>
        </nav>
    
    )
}

export default Nav;