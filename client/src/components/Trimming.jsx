import React from 'react';
import {Link} from 'react-router-dom';
import tree_trimming_diagram from '../imgs/tree_trimming_diagram.jpg';
import Services from './Services';

const Trimming = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>
            
            {/* Tree Trimming Service */}
            <div>
                <h1 className="serviceTitle">Tree Trimming</h1>
                <div className="serviceSection">
                    <div className="serviceLeft">
                        <div className="serviceBlock">
                            <h2 className="serviceSubTitle">Why is trimming trees important?</h2>
                            <p className="serviceDesc">Proper tree maintenance is an important step for improving the health and aethetics of a tree. It is crucial to regularly have your trees trims to remove any damaged or dead branches that could pose a risk to nearby buildings, vehicles or pedestrians. A properly maintained tree can help prolong the life of the tree and help to manage future fruit or flower production. Improving the aethetics of the tree it can increase property value.</p>
                        </div>
                        <div className="serviceBlock">
                            <h2 className="serviceSubTitle">How to properly trim your trees?</h2>
                            <p className="serviceDesc">There are many things we should look for when it comes to properly trimming a tree. Here is a list of everything that is involved in properly trimming a tree.</p>
                            <div className="trimmingDiagram">
                                <h3 className="diagramTitle">Tree Trimming Diagram</h3>
                                <div className="serviceImg">
                                    <img src={tree_trimming_diagram} alt="trimming_diagram" className="trimmingDiagramImg"/>
                                </div>
                                <p className="diagramCredit">Illustration of Reasons to prune trees (red branches to be removed)</p>
                                <p className="diagramCredit">Credit: Don Wittig, former UME Master Gardener</p>
                            </div>
                            <h3 className="itemList">1. Remove competing leader</h3>
                            <p className="serviceDesc">You want to have one dominant leader stem. It is a good idea to pick the tallest, strongest main branch to be the dominant leader. When a tree has co-dominate stems it can lead to structural weakness.</p>
                            <h3 className="itemList">2. Remove crowded, malformed or crossing branches</h3>
                            <p className="serviceDesc">Cleaning out the interior of a tree of any crowded, malformed or crossing branches can help to prevent in future issues and allow the tree to developer healthier branches with the remaining branches.</p>
                            <h3 className="itemList">3. Remove disease, damaged or dead branches</h3>
                            <p className="serviceDesc">Diseased, damaged and dead branches can pose a risk to nearby buildings, vehicles or pedestrians. It can also help to prevent diseases or pest from spreading to the rest of the tree.</p>
                            <h3 className="itemList">4. Remove low branches, suckers or grinding roots</h3>
                            <p className="serviceDesc">Clearing the lower levels of the tree can provide clearance for buildings, vehicles or pedestrians.</p>
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

export default Trimming