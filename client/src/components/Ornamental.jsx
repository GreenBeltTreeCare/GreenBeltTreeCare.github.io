import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const Ornamental = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Professional Ornamental Pruning Service</h1>
                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2>What are ornamental plants?</h2>
                        <p className="serviceDesc">Ornamental plants or garden plants are plants which are grown for display purposes only. They are often used to add color and create a decorative landscape. An ornamental plant can be anything from trees, shrubs, lillies, annuals, perennials, hedges and conifers.</p>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ornamental