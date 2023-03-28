import React from "react";
import SearchBar from "../search/SearchBar";

import styled from "styled-components";

const Container = styled.div`
       display: flex;
       justify-content: flex-end;
       background-color: #D6D6A5;
       padding-top: 20px;
       margin-bottom: 20px;
       border-radius: 5px;
       opacity: 0.92;
`;

export default function Nav (props){

    return(
         <Container>
            <SearchBar
              onSearch={(characterID) => props.onSearch(characterID)/*window.alert(characterID)*/}
            /> 

         </Container>
    )
}