//CARTA

import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux'
import {addFavorites, deleteFavorites} from '../reducer/actions';


const Contenedor = styled.div`
     display: flex;
     flex-direction: column;
     width: 230px;
     height:300px;
     border: 2px solid #9b35cf;
     border-radius: 5px;
     background-color: #f39cfb;
     box-shadow: 0px 1px 11px 4px rgba(39,46,179,0.54);
     margin: 10px;
     
     &:hover{
      transform: scale(1.1);
      transition: 0.5s;
      box-shadow: 0px 1px 11px 4px white;
     }
`; 

const ButtonContainer = styled.button`
   
   display: flex;
   justify-content: space-between;
   border-radius: 5px 5px;
   border: none;
   background-color: white;
 
`;

const Button = styled.button`
     width: 25px;
     heigth: 20px;
     border-color: 10px solid white;
     border-radius: 5px;
     color: white;
     background-color: #b70cc3;
     &:hover {
      cursor: pointer;
      transform: scale(1.1);
   }
`;


const ImageContainer = styled.div`
       display: flex;
       flex-direction: column-reverse;

`;

const Image = styled.img`
 
`;

const Name = styled.h2`
     max-width: 210px;
     position: absolute;
     margin-bottom: 10px;
     margin-left: 10px;
     color: white;
     background-color: #0035e6;
     opacity: 0.5;
     border-radius: 5px;
`;

const PropsContenedor  = styled.div`
        display: flex;
        justify-content: space-evenly;
        color: white;
        
`;


const Props = styled.h2`
     margin-top: 5px
`;


const StyleLink = styled(Link)`
   text-decoration: none;
`;

const ButtonFav = styled.button`
   background-color: #b70cc3;
   color: aqua;
   border-radius: 5px; 

   &:hover{
      cursor: pointer;
      transform: scale(1.1);
   }
`;


function Card({id,name, species, image, gender, onClose, deleteFavorites, addFavorites, myFavorites}) {

   const [isFav, setIsfav] = useState(false)

   const handleFavorite = ()=>{

      if(isFav){
      setIsfav(false)
      deleteFavorites(id)


      }else{
         setIsfav(true)
         addFavorites({id,name, species, image, gender, onClose})
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
        setIsfav(true);
       }
      });
      }, [myFavorites]);



   return (

       <Contenedor >
         <ButtonContainer>
            { isFav 
            ? 
            (<ButtonFav onClick={handleFavorite}>💙</ButtonFav>) 
            : 
            (<ButtonFav onClick={handleFavorite}>🤍</ButtonFav>)
            }

              {isFav? null : (<Button onClick={onClose}>X</Button>)}
         </ButtonContainer>

         <StyleLink to={`/detail/${id}`}>
         <ImageContainer>
            <Image src={image} alt="Not Found" />
            <Name>{name}</Name>
         </ImageContainer>

        <PropsContenedor>
         <Props>{species}</Props>
         <Props>{gender}</Props>
         </PropsContenedor>
        
         </StyleLink>
       </Contenedor>
      
   );
};


const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch)=>{
    return{
      addFavorites: (character)=>{
         dispatch(addFavorites(character))
      },

      deleteFavorites: (id) =>{
         dispatch(deleteFavorites(id))
      }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)








