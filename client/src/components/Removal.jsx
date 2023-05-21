import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const Removal = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Tree Removal</h1>
                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2 className="serviceSubTitle">When should a tree be removed?</h2>
                        <p className="serviceDesc">Trees are great for the environment and have lots of benefits when they are healthy. We always try to save a tree whenever possible, however, there are certain situations when the best thing to do is to remove it. Before removing a tree, it is best to have it diagnoses by an arborist. Arborist are trained to identify symptoms that may not be obvious to the untrained eye. These are some of the signs you should look out for when deciding if it's time to remove a tree.</p>
                        
                        {/* List item 1 */}
                        <h3 className="itemList">1. The tree is damaged or decaying</h3>
                        <p className="serviceDesc">A tree that is been damaged or decaying may be structurally compromised especially if the damage or decay has occurred along the trunk or co-dominate stems of the tree. </p>
                        <p className="descHeader">Here are some warning signs to look out for:</p>
                        <ul className="descList">
                            <li>Vertical cracks in the truck</li>
                            <li>Dead stubs that have rotted back inside the tree trunk</li>
                            <li>Open cavities or wounds</li>
                            <li>Severe damage or burns to the truck</li>
                        </ul>
                        <p className="serviceDesc">If you see any of these signs you should have it looked at by an arborist to determine if it's severe enough to require removal of the tree.</p>
                        
                        {/* List item 2 */}
                        <h3 className="itemList">2. The tree is dead or dying</h3>
                        <p className="serviceDesc">When a tree is dead or dying the only option is to have it removed. Dead or dying trees could fall or drop branches which could damage nearby buildings, vehicles or pedestrians.</p>
                        <p className="descHeader">Here are some signs that your tree is dead or dying:</p>
                        <ul className="descList">
                            <li>It doesn't produce leaves or buds during growing seasons</li>
                            <li>All the branches are dead</li>
                            <li>An evergreen tree that is thinning, losing needles or the needles have turned brown</li>
                            <li>The tree is showing signs of disease or insect infestation</li>
                        </ul>

                        {/* List item 3 */}
                        <h3 className="itemList">3. The trunk of the tree is hollow</h3>
                        <p className="serviceDesc">A hallowed out tree can be very dangerous and often times hard to notice. A tree may look healthy on the outside while the inside has become hollow. To check if your tree is hollow you can try tapping on the tree and listen to the sound created. There may also be other signs such as critters that may have made a home inside the tree.</p>
                        
                        {/* List item 4 */}
                        <h3 className="itemList">4. The tree is in a hazardous location or has a significant lean</h3>
                        <p className="serviceDesc">There are some situations where a perfectly healthy tree should be removed due to the potential risk to nearby buildings or power lines. If a tree has a significant lean towards a building or power lines, it is a good idea to call an arborist to assess the risk and determine whether or not the tree should be removed.</p>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Removal