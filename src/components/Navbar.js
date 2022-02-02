import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";                    
//  tratatatata

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
 

  const changeBackground = () => { 
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
       <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="nav-container fixed-top">
          <NavLink exact to="/" className="nav-logo align-middle">
          <div>
          <img className="img_logo_nav" src="../images/flower.png" path="/about" alt=""/>
          </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/#contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;










  
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
// import "./Navbar.css";
// import { navItems } from "./NavItems";
// //  import Button from "./Button";



// function Navbar() {

//   const [mobile, setMobile] = useState(false);
//   const [sidebar, setSidebar] = useState(false);
//   const [navbar, setNavbar] = useState(false);
  

//   useEffect(() => {
//     if (window.innerWidth < 1100) {
//       setMobile(true);
//     }
//   }, []);
 
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1024
//         ) {
//         setMobile(true);
//       } else {
//         setMobile(false);
//         setSidebar(false);
//       }
//     };
//     const changeBackground = () => { 
//       if (window.scrollY >= 600) {
//         setNavbar(true);
//       } else {
//         setNavbar(false);
//       }
//     };
  
//     window.addEventListener("scroll", changeBackground);

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//     <div className="navbar-container">
//       <nav className={navbar ? "navbar active" : "navbar"}>
//         <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
//         <img className="logo-nav " src="../images/flower.png" path="/about" alt=""/>
//         </Link>
//         {!mobile && (
//           <ul className="nav-items">
//             {navItems.map((item) => {
//               return (
//                 <li key={item.id} className={item.nName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
       

//         {mobile && (
//           <div className="sidebar-toggle">
//             {sidebar ? (
//               <Icons.FaTimes
//                 className="sidebar-toggle-logo"
//                 onClick={() => setSidebar(!sidebar)}
//               />
//             ) : (
//               <Icons.FaBars
//                 className="sidebar-toggle-logo"
//                 onClick={() => setSidebar(!sidebar)}
//               />
//             )}
//           </div>
//         )}
//       </nav>

//       <div className={sidebar ? "sidebar active" : "sidebar"}>
//         <ul className="sidebar-items">
//           {navItems.map((item) => {
//             return (
//               <li
//                 key={item.id}
//                 className={item.sName}
//                 onClick={() => setSidebar(false)}
//               >
//                 <Link to={item.path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
        
//       </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;








