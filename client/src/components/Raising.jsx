import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import crown_raising from '../imgs/crown_raising.jpg';

const Raising = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Professional Crown Raising Service</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2>What is crown raising?</h2>
                        <p className="serviceDesc">Crown raising is the removal of lower branches of the tree in order to create clearance for vehicles or foot traffic below the tree. When doing a crown raising there should be at least two-thirds of the total height of the tree with living branches remaining. Crown raising is especially important for trees located near a street or side walk. Street tree clearance should be at least 16ft to allow for trucks and other large vehicles to safely pass under the tree.</p>
                        <div className="serviceImg">
                            <img src={crown_raising} alt="crown_raising" className="crownRaisingImg"/>
                        </div>
                        <p className="diagramCredit">Image Illustrates Crown Raising</p>
                        <p className="diagramCredit">(Grey areas are removed)</p>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Raising