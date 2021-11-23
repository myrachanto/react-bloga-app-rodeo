import { Link } from "react-router-dom";

const Errorpage = () => {
    return ( 
        <div className="not-found">
            <h2>That page cannot be found </h2>
            <Link to="/">Go back to Home page</Link>
        </div>
     );
}
 
export default Errorpage;