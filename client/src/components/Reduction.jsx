import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import crown_reduction from '../imgs/crown_reduction.jpg';

const Reduction = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Crown Reduction</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2 className="serviceSubTitle">What is crown reduction?</h2>
                        <p className="serviceDesc">Crown reduction is the removal of the upper or outer most part of the tree. This is usually done in order to create clearance for objects above the tree such as power lines. Crown reduction is done by removing the leader branches from each individual branch section.</p>
                        <div className="serviceImg">
                            <img src={crown_reduction} alt="crown_reduction" className="crownReductionImg"/>
                        </div>
                        <p className="diagramCredit">Image Illistrates Crown Reduction</p>
                        <p className="diagramCredit">(Blue section is removed from tree)</p>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reduction