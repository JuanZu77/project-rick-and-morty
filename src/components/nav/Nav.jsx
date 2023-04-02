//BOTONES ABOUT y HOME

import React from "react";
import SearchBar from "../search/SearchBar";

import styled from "styled-components";
import {NavLink} from "react-router-dom";
import styles from "../nav/NavLinkStyle.module.css";


const Container = styled.div`
       display: grid;
       grid-template-columns: 20% 20% 60%;
       background-color: #D6D6A5;
       padding-top: 20px;
       margin-bottom: 20px;
       border-radius: 5px;
       opacity: 0.92;
`;

//NavlinkMe para reutilizar el el mismo Nav Link 
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

    return(
         <Container>

          <NavLinkMe to="/home">  Home </NavLinkMe>
          <NavLinkMe to="/about"> About </NavLinkMe>

            <SearchBar
              onSearch={(characterID) => props.onSearch(characterID)/*window.alert(characterID)*/}
            /> 
            

         </Container>
    )
}