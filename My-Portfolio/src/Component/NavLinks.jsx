import React from "react";  
import { Link } from "react-scroll";  

const NavLinks = ({ link, className, onClick }) => {  
  return (  
    <li className={className}>  
      <Link   
        to={link}   
        smooth   
        duration={500}   
        onClick={onClick}   
        className="text-gray-300 no-underline relative group"  
      >  
        {link}  
        <span className=" hover:text-cyan-500 absolute left-0 bottom-0 h-[2px] w-full bg-cyan-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />  
      </Link>  
    </li>  
  );  
};  

export default NavLinks;