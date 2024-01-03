import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/Appcontext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Categorie from "./pages/Categorie";
import Tag from "./pages/Tag";
import Title from "./pages/Title";

export default function App() { 

  const {fetchData} = useContext(Appcontext);

  const [searchParams, setSearchParams]= useSearchParams();
  const location = useLocation();


  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), tag);
    }
    else if(location.pathname.includes("categorie")){
      const categorie = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), categorie);
    }
    else{
      fetchData(Number(page));
    }
  },[location.pathname, location.search]);

  

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header/>
      <Routes>
        <Route path="/blogs-app" element={<Blogs/>}/>
        <Route path="/categorie/:categid" element={<Categorie/>}/>
        <Route path="/tag/:tagid" element={<Tag/>}/>
        <Route path="/blog/:titid" element={<Title/>}/>
      </Routes>
      {!location.pathname.includes("blogs-app") && !location.pathname.includes("tag") ? (<div></div>): <Footer/>}
      
    </div>
  );
}
