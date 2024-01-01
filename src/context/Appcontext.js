import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();
    
export default function AppContextProvider({children}) {

    const [page, setPage]=useState(1);
    const [loading, setLoading]= useState(false);
    const [totalpage, setTotalpage]= useState(null);
    const [post, setPost]=useState([]);
    const [blog, setBlog]=useState(null);
    const navigate = useNavigate()

    async function fetchData(page=1, tag=null, categorie=null,){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
          }
        if(categorie) {
            url += `&category=${categorie}`;
          }
        try{
            const data = await fetch(url);
            const output = await data.json();
            setPage(output.page);
            setPost(output.posts);
            setTotalpage(output.totalPages);
        }
        catch{
            console.log("error");
        }
        setLoading(false);
    }

    function handeler(page){
        navigate( { search: `?page=${page}`});
        setPage(page);
    }

    const value={
        page,
        setPage,
        post,
        setPost,
        loading,
        setLoading,
        totalpage,
        setTotalpage,
        fetchData,
        handeler,
        blog, setBlog
    }

    return <Appcontext.Provider value={value} >
        {children}
    </Appcontext.Provider>
}