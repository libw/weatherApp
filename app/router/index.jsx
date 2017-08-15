import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Index from "../containers/index"
import Cityedit from "../containers/cityedit";
import Citylist from "../containers/citylist";
const Routers =()=>(
    <Router>
        <div className="one-contain">
            <Route path="/" exact render={()=><Index/>} />
            <Route path="/cityedit" render={()=><Cityedit />} />
            <Route path="/citylist" render={()=><Citylist/>} />
        </div>
    </Router>
)
export default Routers;
