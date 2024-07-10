import React,{ useState } from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import Search from "./pages/Search";
 export const Navbar = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <nav>
                 <Link to= "/" className='title'>
                 HNG
                 </Link>
                 <div className='menu' onClick={() =>{
                  setMenuOpen(!menuOpen);
                 }}>
                  <Link to= "/" className='title'>
                Search
                 </Link>
                 <div className='menu' onClick={() =>{
                  setMenuOpen(!menuOpen);
                 }}></div>
                 </div>

      <ul className= "[menuOpen ? true : false]" >
<Search/>
      
       <li>
         <NavLink to= '/contact'>Contact </NavLink>
         </li>

         <li>
            <NavLink to= '/about' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></NavLink>
        </li>
       <li>
         <NavLink to= '/services' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
</svg></NavLink>
         </li>
      </ul>
    </nav>
    
    <nav className="nav2">
      <ul>
      <li>
                 <NavLink to= "living room">
                 Living room
                 </NavLink>
                 </li>

       <li>
         <NavLink to= 'bedroom'>Bedroom</NavLink>
         </li>
       <li>
         <NavLink to= 'kitchen'>Kitchen</NavLink>
         </li>

         <li>
            <NavLink to= 'storage' >Storage furniture</NavLink>
        </li>
       <li>
         <NavLink to= 'study' >Home Office and Study</NavLink>
         </li>
      </ul>
    </nav>

    </>
  )
}

export default Navbar;
