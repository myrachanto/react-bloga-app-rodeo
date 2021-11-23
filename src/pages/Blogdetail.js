import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";

const Blogdetail = () => {
    const {id} = useParams()
    const [isloading, setIsLoading] = useState(false)
    const [errors, setError] = useState(null)
    const history = useHistory()
    const { data:blog, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`)
    const handleDelete = async (e) => {
        const url = "http://localhost:8000/blogs"
        try{
            setIsLoading(true)
            const res = await fetch(`http://localhost:8000/blogs/${blog.id}`, {method: 'DELETE'})
             if (!res.ok){
                 throw Error("could not get the results")
             }
             history.push('/')
         }catch(e){
             setError(e.message)
         } finally {
             setIsLoading(false)
         }
    }
    return ( 
        <div className="blog-details">
            {isloading && <div>Loading...</div>}
            {errors && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <p> {blog.body}</p>
                <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetail;