import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import custom from "./Custom.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core'


export default function Header() {
    return (
        <nav className={`navbar navbar-expand-lg ${custom.bglight}`}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><b>INFINITY</b></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <LinkContainer to="/">
                            <li class="nav-item">
                                <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#" >Home</a>
                            </li>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <li class="nav-item">
                                <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">About</a>
                            </li>
                        </LinkContainer>
                        <LinkContainer to="/product">
                            <li class="nav-item">
                                <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">Product</a>
                            </li>
                        </LinkContainer>
                        <LinkContainer to="/Contact">
                            <li class="nav-item">
                                <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">Contact Us</a>
                            </li>
                        </LinkContainer>
                    </ul>
                    <form>
                        <div className={` ${custom.icons}`}>
                            <a ><i class="fa-solid fa-cart-arrow-down"></i></a>&nbsp;&nbsp;
                            <a ><i class="fas fa-search"></i></a>
                        </div>
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    )
}
