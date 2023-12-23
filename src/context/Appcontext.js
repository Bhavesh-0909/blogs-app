import { Children, createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export const Appcontext = createContext();

    
export default function AppContextProvider({children}) {

    const [page, setPage]=useState(1);
    const [loading, setLoading]= useState(false);
    const [totalpage, setTotalpage]= useState(null);
    const [post, setPost]=useState([]);

    async function fetchData(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
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