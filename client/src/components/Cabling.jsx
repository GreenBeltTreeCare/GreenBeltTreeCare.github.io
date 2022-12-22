import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import cobra_cable from '../imgs/cobra_cable.jpg'

const Cabling = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Professional Cabling Service</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2>When do I need to consider cabling my trees?</h2>
                        <p className="serviceDesc">Tree cabling systems are designed to create a connection between two limbs that are at risk of breaking off. They provide addition support to the limbs to prevent one or more from breaking off or falling. They are installed between two co-dominant stems and are designed to grow with the tree.</p>
                        <div className="serviceImg">
                            <img src={cobra_cable} alt="cobra_cable_img" className="cobraImg"/>
                        </div>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cabling