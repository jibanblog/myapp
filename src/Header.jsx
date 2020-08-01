import React from 'react';
import logo from './Image/welcome.gif';





const Header = () =>{

    return(
        <>
        <div className="header">
            <img src={logo} alt="logo" />
            <h1> My App </h1>
        </div>
        </>
    )
}


export default Header;