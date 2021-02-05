import { NavLink, BrowserRouter } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react';

function Header() {
    const [hoverClass, setHoverClass] = useState(null);
    const headerElement = useRef(null);
    useEffect(() => {
        window.onscroll = () => scrollFunction();      
    }, [])
    function scrollFunction() {
        setHoverClass('hoverClass')
        if (window.scrollY > 50) {
            setHoverClass('hoverClass')
        } else {
            setHoverClass(null)
        }
    }

    return (
    <header className="header" ref={headerElement}>
        <BrowserRouter>
            <NavLink to="/" activeClassName="selected" className="nav-link" exact>OtaKuiz</NavLink>
            <NavLink to="/challenge-expert" activeClassName="selected" className={`nav-link cta ${hoverClass}`}  exact>Le challenge expert</NavLink>
        </BrowserRouter> 
    </header>
    );
}

export default Header;