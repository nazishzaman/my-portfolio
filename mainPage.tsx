
"use client"
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import"aos/dist/aos.css;"
// my components
import Sidebar from "./sidebar";
import Detail from "./detail";

const MainPage = () => {
    // useEffect for AOS
    useEffect(() => {
        AOS.init({
          once: false,
        })
      
      }, []);

  return (
    <div className="flex overflow-hidden">
   {/* side bar*/}
   <div>
    <Sidebar/>
   </div>
   {/* main*/}
  <div>
    <Detail/>
    </div>
    </div>
  )
}

export default MainPage
