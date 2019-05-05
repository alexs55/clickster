import React from "react";
import './header.css'

const Header = props =>(
        <nav className="header">
        <ul><li className="title">
       <a href="/">Poke-Click</a>
        </li><li className="scores">Score: {props.score} | High Score: {props.highscore}</li>
        </ul>
        </nav>
    );
export default Header;






