import React, { Component } from 'react';

import { PresentationStyle } from '../styles/presentation-style';

class Presentation extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <PresentationStyle>

            <div className="wrapper">
                <div className="resume">
                    <h1>Daniel Quirino</h1>
                    
                    <h3>Sou Daniel, um amante da arte de programação e viciado em tecnologia. Atualmente
                    trabalho como <span> Full Stack Developer </span>. Para saber mais 
                    <a href="#about"> sobre mim </a> arraste a tela para baixo.</h3>

                    <hr/>
                </div>

                <div className="social">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/daniel-quirino-5247a097/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-stack-overflow"></i></a></li>
                        <li><a href="https://github.com/Daniel-Quirino" ><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>

            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </PresentationStyle>
        </div>
        );
    }
}
 
export default Presentation;