import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const Stump = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Stump Grinding</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2 className="serviceSubTitle">What is stump grinding?</h2>
                        <p className="serviceDesc">A stump grinder is a machine that is designed to rolled on top of the stump and spins at a high speed to chew up the stump until the stump is no longer visible above the surface of the top soil. How deep a stump should be ground down depends on what your plans on for the area the stump is located. In most cases grinding a stump down to about 6 inches below surface level is enough. In some cases you may need to go deeper if you plan to have some sort of structure over where the stump location. After grinding down the stump there's usually a big hole where the stump used to be. In most cases this can be filled in using the wood chips created during the grinding process, but you can also have new top soil brought in to fill the hole if preferred.</p>
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