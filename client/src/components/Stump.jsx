import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const Stump = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Professional Stump Grinding Service</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2>Why should I consider stump grinding?</h2>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stump