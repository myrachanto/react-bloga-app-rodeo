import { getQueriesForElement } from "@testing-library/react";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:getQueriesForElement,
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;