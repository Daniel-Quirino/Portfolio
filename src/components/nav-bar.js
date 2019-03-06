import React, { Component } from 'react';

import { NavBarStyle } from '../styles/nav-bar-style';

class NavBar extends Component {
    state = { }
    render() { 
        return (
            <NavBarStyle> 
            <ul id="nav" className="nav">
                <li className="current"><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#resume">Resumo</a></li>
                <li><a href="#portfolio">Trabalhos</a></li>
                <li><a href="#testimonials">Testemunhas</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            </NavBarStyle>
        );
    }
}
 
export default NavBar;

