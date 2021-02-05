import { NavLink, BrowserRouter } from 'react-router-dom'
import React, { useEffect, useRef } from 'react';

function Header() {
    const headerElement = useRef(null);
    useEffect(() => {
        window.onscroll = () => scrollFunction();      
    }, [])
    function scrollFunction() {
        // console.log(window.scrollY)
        // if (window.scrollY > 754) {
        //     headerElement.current.style.position='sticky'
        //     headerElement.current.style.backgroundColor='rgba(45, 0, 224, 0.455)';
        // } else {
        //     headerElement.current.style.position='absolute'
        //     headerElement.current.style.backgroundColor='var(--colorMainBlack)';
        // }
    }

    return (
    <header className="header" ref={headerElement}>
        <BrowserRouter>
            <NavLink to="/" activeClassName="selected" className="nav-link" exact>OtaKuiz</NavLink>
            <NavLink to="/challenge-expert" activeClassName="selected" className="nav-link" exact>Le challenge expert</NavLink>
        </BrowserRouter> 
    </header>
    );
}

export default Header;