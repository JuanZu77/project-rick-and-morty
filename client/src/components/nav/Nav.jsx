//BOTONES ABOUT y HOME

import React from "react";
import SearchBar from "../search/SearchBar";

import {NavLink, useNavigate} from "react-router-dom";
import styles from "../nav/NavLinkStyle.module.css";

    const NavLinkMe = ({to, children, props})=>{ 
        return (
                <NavLink 
                  {...props}
                  to={to}
                  className={({isActive}) => 
                  isActive ? styles.active : styles.disable
                  }
                > 
                {children}
                </NavLink>
            )
         }



export default function Nav (props){

  const navigate = useNavigate();

    return(
         <div className={styles.container}>

          <NavLinkMe to="/home">  Home </NavLinkMe>
          <NavLinkMe to="/favorites"> Favorites </NavLinkMe>
          <NavLinkMe to="/about"> About </NavLinkMe>
          

            <SearchBar 
              onSearch={(characterID) => props.onSearch(characterID)/*window.alert(characterID)*/}
            /> 

             <button onClick={()=>navigate("/")} className={styles.logOut}>LogOut</button> 

               
         </div>
    )
}