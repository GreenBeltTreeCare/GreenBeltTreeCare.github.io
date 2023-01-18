import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import wyatt from '../imgs/wyatt.jpg';
import trimming_before from '../imgs/trimming_before.jpg';
import trimming_after from '../imgs/trimming_after.jpg';
import pruning_before from '../imgs/pruning_before.jpg';
import pruning_after from '../imgs/pruning_after.jpg';
import removal_before from '../imgs/removal_before.jpg';
import removal_after from '../imgs/removal_after.jpg';
import stump_before from '../imgs/stump_before.jpg';
import stump_after from '../imgs/stump_after.jpg';
import tree_trimming from '../imgs/tree_trimming.jpg';
import tree_background from '../imgs/tree_background.png';
import header_img from '../imgs/header_img.jpg';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0);

        let img = 'imageBefore';
        setInterval(() => {
            if(img === 'imageBefore'){
                document.getElementById('trimBefore').style.display = "none";
                document.getElementById('trimAfter').style.display = "inherit";
                document.getElementById('pruneBefore').style.display = "none";
                document.getElementById('pruneAfter').style.display = "inherit";
                document.getElementById('removeBefore').style.display = "none";
                document.getElementById('removeAfter').style.display = "inherit";
                document.getElementById('stumpBefore').style.display = "none";
                document.getElementById('stumpAfter').style.display = "inherit";
                img = 'imageAfter';
            } else if(img === 'imageAfter'){
                document.getElementById('trimAfter').style.display = "none";
                document.getElementById('trimBefore').style.display = "inherit";
                document.getElementById('pruneAfter').style.display = "none";
                document.getElementById('pruneBefore').style.display = "inherit";
                document.getElementById('removeAfter').style.display = "none";
                document.getElementById('removeBefore').style.display = "inherit";
                document.getElementById('stumpAfter').style.display = "none";
                document.getElementById('stumpBefore').style.display = "inherit";
                img = 'imageBefore';
            }
        }, 4000)
    }, [])

    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div className="bodyWrapper">
                {/* Header Image */}
                <div>
                    <img src={header_img} alt="tree_background" className="tree_background"/>
                </div>

                {/* Banner section */}
                <div className="bannerDiv">
                    <h1 className="bannerHeader">Need help with taking care of your trees?</h1>
                    <h2 className="bannerSubText">With over 10 years of experience we are here to help you with your tree care needs.</h2>
                    <h2 className="bannerDetails">We provide a wide range of services such as trimming, pruning, tree removal, stump grinding, and more.</h2>
                </div>

                {/* Contact section */}
                <div className="contactDiv">
                    <p className="contactInfo">To request a free quote please contact us at 206-531-6525<br/> or <Link to="/contact" className="contactMsg">send us a message.</Link></p>
                </div>

                {/* About section */}
                <div className="aboutDiv">
                    <div className="about">
                        <div style={{ backgroundImage: `url(${tree_background})`}} className="aboutDetails">
                            <h1 className="aboutTitle">About Us</h1>
                            <p className="aboutMsg">Green Belt Tree Care is a Native American owned and operated tree care company based out of Auburn, WA. We are Licensed, Bonded and Insured. We are committed to providing top quality tree care services throughout western washington. We offer a range of services from tree trimming, tree removal, stump grinding and many more. We also offer 24 hour emergency services.</p>
                        </div>
                        <img src={wyatt} alt="image_not_found" className="aboutImg"/>
                    </div>
                </div>

                {/* Tree Maintenance */}
                <div className="maintenanceDiv">
                    <div className="maintenance">
                        <img className="trimmingImg" src={tree_trimming} alt="image_unavailable" />
                        <div style={{ backgroundImage: `url(${tree_background})`}} className="maintenanceDetails">
                            <h1 className="maintenanceTitle">Why is Tree Maintenance so Important?</h1>
                            <p className="maintenanceDesc">There are many benefits to proper tree maintenance but here are the 5 main reasons why proper tree maintenance is so important.</p>
                            <ol className="maintenanceList">
                                <li>Preventative tree maintenance will improve the overall structure of your trees, keeping them from developing weak branching habits.</li>
                                <li>Trimming prevents limbs from growing weak crotches or eventually crossing each other and competing for space.</li>
                                <li>Removing dead or dying limbs reduces the stress on the tree by elimating fuel for burrowing insects, fungus and bacteria.</li>
                                <li>If dead branches break off and fall they can potentially cause damage to property or injury to someone.</li>
                                <li>A trimmed tree is more aethetically pleasing and can improve the appearance of your property and increase it's value.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <hr className="diffSep"/> */}

                {/* Service section */}
                <div className="differenceDiv">
                    <div className="differences">
                        <h1 className="differenceTitle">See the difference we can make</h1>
                        <div className="differenceSection">
                            <div className="differenceType left">
                                <img src={trimming_before} alt="image_not_available" id="trimBefore" className="fade"/>
                                <img src={trimming_after} alt="image_not_available" id="trimAfter" className="fade"/>
                                <div style={{ backgroundImage: `url(${tree_background})`}} className="differenceDetails">
                                    <h1 className="servTitle">Tree Trimming</h1>
                                    <p className="serviceDetails">Proper tree maintenance is an important step for improving the health and aethetics of a tree. It is crucial to regularly have your trees trims to remove any damaged or dead branches that could pose a risk to nearby buildings, vehicles or pedestrians. A properly maintained tree can help prolong the life of the tree and help to manage future fruit or flower production. Improving the aethetics of the tree it can increase property value.</p>
                                </div>
                            </div>
                            <div className="differenceType right">
                                <div style={{ backgroundImage: `url(${tree_background})`}} className="differenceDetails">
                                    <h1 className="servTitle">Ornamental Pruning</h1>
                                    <p className="serviceDetails">Ornamental plants or garden plants are plants which are grown for display purposes only. They are often used to add color and create a decorative landscape. An ornamental plant can be anything from trees, shrubs, lillies, annuals, perennials, hedges and conifers.</p>
                                </div>
                                <img src={pruning_before} alt="image_not_available" id="pruneBefore" className="fade"/>
                                <img src={pruning_after} alt="image_not_available" id="pruneAfter" className="fade"/>
                            </div>
                            <div className="differenceType left">
                                <img src={removal_before} alt="image_not_available" id="removeBefore" className="fade"/>
                                <img src={removal_after} alt="image_not_available" id="removeAfter" className="fade"/>
                                <div style={{ backgroundImage: `url(${tree_background})`}} className="differenceDetails">
                                    <h1 className="servTitle">Tree Removal</h1>
                                    <p className="serviceDetails">Trees are great for the environment and have lots of benefits when they are healthy. We always try to save a tree whenever possible, however, there are certain situations when the best thing to do is to remove it. Before removing a tree, it is best to have it diagnosed by an arborist. Arborist are trained to identify symptoms that may not be obvious to the untrained eye. These are some of the signs you should look out for when deciding if it's time to remove a tree.</p>
                                </div>
                            </div>
                            <div className="differenceType right">
                                <div style={{ backgroundImage: `url(${tree_background})`}} className="differenceDetails">
                                    <h1 className="servTitle">Stump Grinding</h1>
                                    <p className="serviceDetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <img src={stump_before} alt="image_not_available" id="stumpBefore" className="fade"/>
                                <img src={stump_after} alt="image_not_available" id="stumpAfter" className="fade"/>
                            </div>
                            {/* <Link to="/services" className="servicesLink">Learn more about what services we provide</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home