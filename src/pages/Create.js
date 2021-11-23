import { useState } from "react";
import { useHistory } from "react-router";


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('tony')
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        if (blog.title === "" || blog.body === ""){
            return
        }
        // console.log(">>>>>>>>>>", blog)
        const url = "http://localhost:8000/blogs"
        try{
            setIsLoading(true)
            const res = await fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)})
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
    <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
        <label htmlFor=""> Blog title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
        <label htmlFor=""> Blog body</label>
        <textarea type="text" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <div className="form-control">
        <label htmlFor=""> Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="tony">Tony</option>
            <option value="chantos">Chantos</option>
        </select >
        </div>
        {/* {author} */}
        {!isloading &&  <button>Add blog</button>}
        {isloading && <button disabled>adding blog</button>}
        </form>
    </div> 
    );
}
 
export default Create
;