import React from 'react';
import { Link } from 'react-router-dom';
import company_logo from '../imgs/company_logo.jpg';
import menu_icon from '../imgs/menu_icon.png';

const Navbar = () => {
    const showDropdown = () => {
        document.getElementById("dropdown").style.display = "block";
    }
    
    const hideDropdown = () => {
        document.getElementById("dropdown").style.display = "none";
    }
    
    const openMenu = () => {
        document.getElementById("menuItems").style.display = "block";
    }

    const closeMenu = () => {
        document.getElementById("menuItems").style.display = "none";
    }

    return (
        <div className="navbar">
            <div className="navbarLeft">
                <img className="logo" src={company_logo} alt="logo"/>
            </div>
            <div className="navLinks">
                <Link to="/" className="link"><h2 className="link">Home</h2></Link>
                <div onMouseOver={showDropdown} onMouseOut={hideDropdown}>
                    <div className="serviceNav">
                        <h2 className="link">Services</h2>
                    </div>
                    <div id="dropdown">
                        <ul className="serviceDropdown">
                            <Link to="/services/tree-trimming" className="navServLink"><li className="dropdownItem">Tree Trimming</li></Link>
                            <Link to="/services/tree-removal" className="navServLink"><li className="dropdownItem">Tree Removal</li></Link>
                            <Link to="/services/ornamental-pruning" className="navServLink"><li className="dropdownItem">Ornamental Pruning</li></Link>
                            <Link to="/services/crown-raising" className="navServLink"><li className="dropdownItem">Crown Raising</li></Link>
                            <Link to="/services/crown-reduction" className="navServLink"><li className="dropdownItem">Crown Reduction</li></Link>
                            <Link to="/services/cabling" className="navServLink"><li className="dropdownItem">Cabling</li></Link>
                            <Link to="/services/stump-grinding" className="navServLink"><li className="dropdownItem">Stump Grinding</li></Link>
                            <Link to="/services/emergency-services" className="navServLink"><li className="dropdownItem">Emergency Services</li></Link>
                        </ul>
                    </div>
                </div>
                <Link to="/contact" className="link"><h2 className="link">Contact Us</h2></Link>
            </div>
            <div onMouseOver={openMenu} onMouseOut={closeMenu} className="navLinksMd">
                <img src={menu_icon} alt="menu_icon" className="menuIcon"/>
                <div id="menuItems">
                    <ul className="serviceDropdown">
                        <Link to="/" onClick={closeMenu} className="linkStyle"><li className="link">Home</li></Link>
                        <li className="servText">Services</li>
                            <Link to="/services/tree-trimming" onClick={closeMenu} className="navServLink"><li className="dropdownItem">Tree Trimming</li></Link>
                            <Link to="/services/tree-removal" onClick={closeMenu} className="navServLink"><li className="dropdownItem">Tree Removal</li></Link>
                            <Link to="/services/ornamental-pruning" onClick={closeMenu} className="navServLink"><li className="dropdownItem">Ornamental Pruning</li></Link>
                            <Link to="/services/crown-raising" onClick={closeMenu} className="navServLink"><li className="dropdownItem">Crown Raising</li></Link>
                            <Link to="/services/crown-reduction"onClick={closeMenu} className="navServLink"><li className="dropdownItem">Crown Reduction</li></Link>
                            <Link to="/services/cabling" onClick={closeMenu} className="navServLink"><li className="dropdownItem">Cabling</li></Link>
                            <Link to="/services/stump-grinding" onClick={closeMenu} className="navServLink"><li className="dropdownItem">Stump Grinding</li></Link>
                        <Link to="/contact" onClick={closeMenu} className="linkStyle"><li className="link">Contact Us</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar