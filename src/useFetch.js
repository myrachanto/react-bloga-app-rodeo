import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(async () => {
        // async function fetchData(){

        // }
        const abortCont = new AbortController()
        try{
           const res = await fetch(url, {signal: abortCont.signal})
            if (!res.ok){
                throw Error("could not get the results")
            }
            const results = await res.json()
            setData(results)
        }catch(e){
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
        return () => abortCont.abort()
    },[url]) 
    return { data, isloading, error}
}

export default useFetch