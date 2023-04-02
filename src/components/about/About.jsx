//MI PERFIL

import React from "react";
import styled from "styled-components";
import styles from "../about/Images.module.css";

const Container = styled.div`
       color: white; 

   @media (min-width: 0px) and (max-width: 600px){
             width: 300px;
         }
       
`;

const ContainerImg = styled.div`
    display: flex;
    justify-content: center;

`;

const Titulo = styled.h1`
   font-family: arial;
   font-size: 50px;
   -webkit-text-stroke: 1px white;
   color: white;
   opacity: 0.75;
   color: transparent; 
`;

const Parrafo = styled.p`
    font-family: sans;
    font-size: 20px;
`;

const Tarjetas = styled.div`
display: flex;
flex-direction: column-reverse;
margin-top: 15px;
`;


const Page = styled.p`
max-width: 210px;
position: relative;
font-family: sans;
top: 520px;
left: 80px;
color: white;
background-color: #0035e6;
opacity: 0.5;
border-radius: 5px;
`;

const Image = styled.img`

  border-radius: 150px;
  width: 300px;
  height: 400px;
  opacity: 0.6;
  margin: 30px;
  margin-bottom: 27px;
  box-shadow: 0px -1px 4px 12px rgba(0,0,0,0.56);

  &:hover {
    opacity: 1;
    scale: 1.2;

  }
`;

const Saludo = styled.h2`
   display: flex;
   position:relative;
   top: 75px;
   justify-content: flex-end;
   
`;


export default function About (props){

         return (
            <Container>
                <Titulo>Bienvenidos a mi primer Web Page con React!</Titulo>
 
                  <Parrafo>
                    Mi nombre es Juan, en el Mes de Enero del 2023 comencé 
                    el Bootcamp para la carrera de Full Stack Web Developer en SoyHenry. 
                    <br/>
                    Esta App fue desarrollada desde cero con las bases y conocimientos adquiridos en el Bootcamp. 
                    <br/>
                    La lógica en su totalidad fue aplicada y en gran parte guiada por instructores del Bootcamp, 
                    <br/>
                    quedando a elección personal el estilizado total de la App.          
                   </Parrafo>


               <ContainerImg>
                  <Tarjetas>
                   <a href="https://github.com/JuanZu77">
                   <Image className={styles.imgGit}></Image>
                   </a>
                   <Page><b>Mi GitHub</b></Page>
                   </Tarjetas>


                   <Tarjetas>
                    <a href="https://www.linkedin.com/in/juan-zubiri/">
                   <Image className={styles.imgLinkedIn} ></Image>
                   </a>
                   <Page> <b>Mi LinkedIn</b></Page>
                   </Tarjetas>
                   
              </ContainerImg> 

             <Saludo>Mis Saludos!</Saludo>
                   
                      
            </Container>
         )
}