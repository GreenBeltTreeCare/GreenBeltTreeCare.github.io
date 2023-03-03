import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import emergency from "../imgs/emergency.jpg";

const Emergency = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Emergency Services</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2 className="serviceSubTitle">When an emergency happens you want someone you can trust.</h2>
                        <p className="serviceDesc">Here in the great northwest we can get some pretty extreme weather which can cause trees to become weighed down with ice and snow or blown over by severe winds. A fallen tree or large branch can create a serious safety hazard for your property or loved ones. We strongly recommend that you have fallen trees removed by a trained professional with years of experience. We specialize in removing dangerous trees while minimizing further damage to your property.</p>
                        <div className="serviceImg">
                            <img src={emergency} alt="fallen_tree_img" className="emergencyImg"/>
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

export default Emergency