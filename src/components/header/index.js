import React from "react";
import './header.css'


const Header = props =>(
     
        <nav className="navbar"><ul><li className="title"><a href="/">Clicky Game</a></li><li className="">You guessed incorrectly!</li><li className="scores">Score: {props.score} | Top Score: {props.highscore}</li></ul></nav>
    );


export default Header;






