//ESTILOS y EVENTOS PARA CADA CARTA

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

//Name: bajarlo
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
//Contenedor de la props 
const PropsContenedor  = styled.div`
        display: flex;
        justify-content: space-evenly;
        color: white;
        
`;

//Porps Species y Gender
//Necesitamos poder aplicar margin y padding directamente 
//   sobre estos elementos para poder acomodarlos 
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

//onCLose >> la traemos es una propiedad de Card en APP.js
//           ya está definida, por lo tanto aquí sólo la invocamos


//Clase 9 -->Envolver EL contenedor Card con LINK
// debemos ir al Detalle del Personaje

function Card({id,name, species, image, gender, onClose, deleteFavorites, addFavorites, myFavorites}) {

   const [isFav, setIsfav] = useState(false)

   const handleFavorite = ()=>{
      //Funcion Boton Favoritos
      //Si el Personaje está en favoritos, lo quitamos
      if(isFav){//===true
      setIsfav(false)
      deleteFavorites(id)

      //si NO está en favoritos, lo agregamos
      }else{
         setIsfav(true)
         addFavorites({id,name, species, image, gender, onClose})
      }
   };

   //Este useEffect mapea y Actualiza los favoriotos mientras navegamos en la APP.
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
        setIsfav(true);
       }
      });
      }, [myFavorites]);



   return (

      //Si<Stylelink envuelve todo el componente toma tambien el click de los Bootnes y genera que no funcionen
       <Contenedor >
         <ButtonContainer>
            { isFav 
            ? 
            (<ButtonFav onClick={handleFavorite}>💙</ButtonFav>) 
            : 
            (<ButtonFav onClick={handleFavorite}>🤍</ButtonFav>)
            }

            {/*Si el Boton está en Favoritos le quitamos el boton X */}
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

// Mapa de Estados
const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

//Despacha el Estado
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

//AHORA debemos EXPORTAR un CONNECT
export default connect(mapStateToProps, mapDispatchToProps)(Card)








/* Opcion 1 >> SIN DESTRUCTURING

export default function Card(props) {
   return (
      <div>
         <button onClick="">X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src="" alt="" /> 
      </div>
   );
};

*/
