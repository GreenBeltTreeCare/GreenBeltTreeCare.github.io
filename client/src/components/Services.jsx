import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'

const Services = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div>
            <h2 className="serviceListTitle">Services</h2>
            <ul>
                <li className="serviceList"><Link to="/services/tree-trimming" className="serviceLinks">Tree Trimming</Link></li>
                <li className="serviceList"><Link to="/services/tree-removal" className="serviceLinks">Tree Removal</Link></li>
                <li className="serviceList"><Link to="/services/ornamental-pruning" className="serviceLinks">Ornmental Pruning</Link></li>
                <li className="serviceList"><Link to="/services/crown-raising" className="serviceLinks">Crown Raising</Link></li>
                <li className="serviceList"><Link to="/services/crown-reduction" className="serviceLinks">Crown Reduction</Link></li>
                <li className="serviceList"><Link to="/services/cabling" className="serviceLinks">Cabling</Link></li>
                <li className="serviceList"><Link to="/services/stump-grinding" className="serviceLinks">Strump Grinding</Link></li>
            </ul>
        </div>
    )
}

export default Services