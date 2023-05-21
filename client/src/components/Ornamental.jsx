import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import ornamental_pruning from "../imgs/ornamental_pruning.jpg"

const Ornamental = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Ornamental Pruning</h1>
                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2 className="serviceSubTitle">What are ornamental plants?</h2>
                        <p className="serviceDesc">Ornamental plants or garden plants are plants which are grown for display purposes only. They are often used to add color and create a decorative landscape. An ornamental plant can be anything from trees, shrubs, lillies, annuals, perennials, hedges and conifers.</p>
                        <h2 className="serviceSubTitle">How to maintain your ornamental plants?</h2>
                        <p className="serviceDesc">Pruning of ornamental plants is very similar to pruning of a tree. You want to ensure you are making proper prune cuts versus heading cuts. In order to keep your ornamentals looking good all year round you need to start pruning when they are young and continue to prune them every year until they reach the desired shape and size that you want. Pruning should be done during the winter months when the plant is in it's dormant state. If you prune them during the late summer or fall months the plant will start growing tender new growth that will likely not survive the winter.</p>
                        <div className="serviceImg">
                            <img src={ornamental_pruning} alt="ornamental_img" className="ornamentalImg"/>
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

export default Ornamental