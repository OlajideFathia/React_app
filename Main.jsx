import React,{ useState } from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import Search from "./pages/Search";
 export const Main = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <div>
             {<img src="../../../public/images/body.jpg" />   }  
             {<img src="../../../public/images/chair 3.png" />   }  
             {<img src="../../../public/images/chair 2.png" />   }  
             {<img src="../../../public/images/chair 4.jpg" />   }  
             {<img src="../../../public/images/chair 3.png" />   }  
             {<img src="../../../public/images/chair 2.png" />   }  
             {<img src="../../../public/images/chair 4.jpg" />   }  
      </div>
    </>
  )
}

export default Main;
