import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/Appcontext";

export default function App() { 

  const {fetchdata}=useContext(Appcontext);

  useEffect(()=>{
    fetchdata();
  },[])
  
  return (
    <div>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
