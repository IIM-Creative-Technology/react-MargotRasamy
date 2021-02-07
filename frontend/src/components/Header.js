import { HashLink as Link } from 'react-router-hash-link';
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
        <Link to="/" className="nav-link">OtaKuiz</Link>
        <Link to="#quiz-list" className={`nav-link cta ${hoverClass}`}>Le challenge expert</Link>
    </header>
    );
}

export default Header;