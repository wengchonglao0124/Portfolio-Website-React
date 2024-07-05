import '../../stylesheets/NavigationBar.css';
import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

import {
    NavLink as RouterNavLink,
    useLocation,
} from "react-router-dom";

import logo from '../../assets/myLogo.svg';
import gitHubIcon from '../../assets/GitHub.svg';
import linkedInIcon from '../../assets/LinkedIn.svg';


function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const BASE = "home";
    const location = useLocation(); // Hook to get the current location object
    const getPath = (path) => {
        // Extract base path for matching active link
        const segments = path.split('/');
        return segments[1] !== "" ? segments[1] : BASE;
    };

    const [activeLink, setActiveLink] = useState(BASE);

    useEffect(() => {
        setActiveLink(getPath(location.pathname));
    },
        [location]);

    return (
        <div>
            <Navbar expand="md">
                <RouterNavLink to="/">
                    <NavbarBrand onClick={() => setActiveLink("home")}>
                        <img src={logo} alt="Logo" id="logo"/>
                    </NavbarBrand>
                </RouterNavLink>

                <NavbarToggler onClick={toggle}>
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <RouterNavLink to="/">
                                <NavLink className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("home")}>
                                    Home
                                </NavLink>
                            </RouterNavLink>
                        </NavItem>
                        <NavItem>
                            <RouterNavLink to="/resume">
                                <NavLink className={activeLink === "resume" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("resume")}>
                                    Resume
                                </NavLink>
                            </RouterNavLink>
                        </NavItem>
                        <NavItem>
                            <RouterNavLink to="/projects">
                                <NavLink className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("projects")}>
                                    Projects
                                </NavLink>
                            </RouterNavLink>
                        </NavItem>
                        <NavItem>
                            <RouterNavLink to="/about">
                                <NavLink className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("about")}>
                                    About
                                </NavLink>
                            </RouterNavLink>
                        </NavItem>
                    </Nav>

                    <NavbarText>
                        <div className="social-icon">
                            <a href="https://github.com/wengchonglao0124"><img src={gitHubIcon} alt="GitHub Icon"/></a>
                            <a href="https://www.linkedin.com/in/wengchong-lao/"><img src={linkedInIcon} alt="LinkedIn Icon"/></a>
                        </div>

                        <RouterNavLink to="/connect">
                            <button onClick={() => setActiveLink("")}>
                                Let's Connect
                            </button>
                        </RouterNavLink>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;