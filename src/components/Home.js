import { useState, useEffect } from "react"
import Bloglist from "./bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [counter, setCounter] = useState (0);
    const handlecClick = () => {
        setCounter(counter + 1)
    }
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    useEffect(() => {
        fetch('http://localhost:8000/blogs ')
            .then(res => {
                if (!res.ok){
                    throw Error("could not get the results")
                }
                return res.json()
            })
            .then((data) => {
                 setBlogs(data)
                 setIsLoading(false)
                 setError(null)
            })
            .catch(e =>{
                setError(e.message)
                setIsLoading(false)
            }) 
    },[]) 
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{counter}</p>
            <button onClick={handlecClick}>increment </button>
            <button onClick={() => setCounter(counter - 1)}>decrement </button>
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