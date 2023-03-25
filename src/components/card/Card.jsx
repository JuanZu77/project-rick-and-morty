import React from "react";
import styled from 'styled-components'

const Contenedor = styled.div`
     display: flex;
     flex-direction: column;
     width: 230px;
     height:300px;
     border: 2px solid #9b35cf;
     border-radius: 5px;
     background-color: #f39cfb;
     box-shadow: 0px 1px 11px 4px rgba(39,46,179,0.54);

     &:hover{
      transform: scale(1.1);
      transition: 0.5s;
      box-shadow: 0px 1px 11px 4px white;
     }
`; 

const ButtonContainer = styled.button`
   
   display: flex;
   justify-content: flex-end;
   border-radius: 5px 5px 0 0;
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

//Opcion 2 con DESTRUCTURING
//onCLose >> la traemos es una propiedad de Card en APP.js
//           ya está definida, por lo tanto aquí sólo la invocamos
export default function Card({name, species, image, gender, onClose}) {
   return (
      <Contenedor >
         <ButtonContainer>
            <Button onClick={onClose}>X</Button>
         </ButtonContainer>

         <ImageContainer>
            <Image src={image} alt="Not Found" />
            <Name>{name}</Name>
         </ImageContainer>

        <PropsContenedor>
         <Props>{species}</Props>
         <Props>{gender}</Props>
         </PropsContenedor>
        

      </Contenedor>
   );
};

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
