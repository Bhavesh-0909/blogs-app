import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/Appcontext";

export default function App() { 

  const {fetchData} = useContext(Appcontext);

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
