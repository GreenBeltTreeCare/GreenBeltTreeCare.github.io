import React from 'react';
import { Link } from 'react-router-dom';
import company_logo from '../imgs/company_logo.png';

const Navbar = () => {
    const showDropdown = () => {
        document.getElementById("dropdown").style.display = "block";
    }

    const hideDropdown = () => {
        document.getElementById("dropdown").style.display = "none";
    }

    return (
        <div className="navbar">
            <img className="logo" src={company_logo} alt="logo"/>
            <h1 className="companyName">Green Belt Tree Care LLC</h1>
            <div className="links">
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
                        </ul>
                    </div>
                </div>
                <Link to="/contact" className="link"><h2 className="link">Contact Us</h2></Link>
            </div>
        </div>
    )
}

export default Navbar