import React from 'react';
import { Link } from 'react-router-dom';
import yelp_logo from '../imgs/yelp-logo.png';
import insta_logo from '../imgs/insta-logo.png';
import isa_member from '../imgs/isa_member.png';
import BBB_Accredited from '../imgs/BBB_Accredited.jpeg'

const SiteMap = () => {
    return (
        <div className="mapWrapper">
            {/* Site Map Header */}
            <h1 className="mapTitle">Green Belt Tree Care LLC</h1>
            <h2>Licenced, Bonded and Insured</h2>
            <hr className="mapHr"/>

            {/* Site Map Body */}
            <div className="mapDiv">
                <div className="isaImgDiv">
                    <img src={isa_member} alt="isa_member" className="isaImg"/>
                </div>
                <div className="mapDetailDiv">
                    <div className="mapDiv">
                        <div>
                            <h3 className="mapHeader">Site Links</h3>
                            <div>
                                <Link to="/" className="mapLink">Home</Link>
                            </div>
                            {/* <div>
                                <Link to="/services" className="mapLink">Services</Link>
                            </div> */}
                            <div>
                                <Link to="contact" className="mapLink">Contact Us</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="mapHeader">Services Available</h3>
                            <div className="siteLinks">
                                <Link to="/services/tree-trimming" className="siteServLink">Tree Trimming</Link>
                                <Link to="/services/tree-removal" className="siteServLink">Tree Removal</Link>
                                <Link to="/services/ornamental-pruning" className="siteServLink">Ornamental Pruning</Link>
                                <Link to="/services/crown-raising" className="siteServLink">Crown Raising</Link>
                                <Link to="/services/crown-reduction" className="siteServLink">Crown Reduction</Link>
                                <Link to="/services/cabling" className="siteServLink">Cabling</Link>
                                <Link to="/services/stump-grinding" className="siteServLink">Stump Grinding</Link>
                            </div>
                        </div>
                        <div className="shareDiv">
                            <h3 className="mapHeader">Visit us on...</h3>
                            <div className="logosDiv">
                                <a href="https://www.yelp.com/biz/green-belt-tree-care-auburn"><img src={yelp_logo} alt="yelp" className="yelpLogo"/></a>
                                <a href="https://www.instagram.com/greenbelttreecare/"><img src={insta_logo} alt="instagram" className="instaLogo"/></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="footer">
                        <h1 className="emergencyService">24 Hour Emergency Service</h1>
                        <img src={BBB_Accredited} alt="image_unavailable"  className="bbbImg"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SiteMap