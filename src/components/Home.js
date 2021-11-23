import useFetch from "../useFetch";
import Bloglist from "./bloglist";
const Home = () => {
    const { data:blogs, isloading, error } = useFetch('http://localhost:8000/blogs')
  
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <div className="blog">
                {error && <div>{error}</div>}
                { isloading && <div>Loading ...</div>}
               {blogs && <Bloglist blogs={blogs} title='All blogs' />}
               {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === 'chantos') } title='chantos blogs'/>}
            </div>
        </div>
     );
}
 
export default Home; 