import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import SiteMap from './components/SiteMap';
import Navbar from './components/Navbar';
import Trimming from './components/Trimming';
import Removal from './components/Removal';
import Ornamental from './components/Ornamental';
import Raising from './components/Raising';
import Reduction from './components/Reduction';
import Cabling from './components/Cabling';
import Stump from './components/Stump';
import Emergency from './components/Emergency';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services/tree-trimming" exact element={<Trimming />} />
        <Route path="/services/tree-removal" exact element={<Removal />} />
        <Route path="/services/ornamental-pruning" exact element={<Ornamental />} />
        <Route path="/services/crown-raising" exact element={<Raising />} />
        <Route path="/services/crown-reduction" exact element={<Reduction />} />
        <Route path="/services/cabling" exact element={<Cabling />} />
        <Route path="/services/stump-grinding" exact element={<Stump />} />
        <Route path="/services/emergency-services" exact element={<Emergency />} />
        <Route path="*" exact element={<Navigate to="/"/>}/>
      </Routes>
      <SiteMap />
    </div>
  );
}

export default App;
