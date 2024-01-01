import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export const Appcontext = createContext();
    
export default function AppContextProvider({children}) {

    const [page, setPage]=useState(1);
    const [loading, setLoading]= useState(false);
    const [totalpage, setTotalpage]= useState(null);
    const [post, setPost]=useState([]);

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
            console.log(output);
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
        setPage(page);
        fetchData(page);
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
        handeler
    }

    return <Appcontext.Provider value={value} >
        {children}
    </Appcontext.Provider>
}