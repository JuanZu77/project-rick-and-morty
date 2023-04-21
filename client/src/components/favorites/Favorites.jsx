
import {connect} from 'react-redux';
import Card from '../card/Card';
import {Contenedor} from '../assets/styledComponentes';

import { useDispatch } from 'react-redux';
//import { ORDER,FILTER } from '../reducer/actionsTypes';
import { filterCards, orderCards } from '../reducer/actions';
import { useState } from 'react';

import styled from 'styled-components';

const Select = styled.select`
       background-color: #db54c0;
       opacity: 0.7;
       border-radius: 5px;
       color: black;
       cursor: pointer;
`;



 function Favorites ({myFavorites}){

   const dispatch = useDispatch();

     const [aux, setAux] = useState(false);

   const handleClick = (event)=>{
      const {name, value} = event.target;

      switch (name){
       case 'order':
            return dispatch(orderCards(value));

         case 'filter':
            return dispatch(filterCards(value))
            
            default:
               setAux(!aux)
               break;
      }
   }


    return(

<>
   <div>
      <Select name='order' onChange={handleClick}>
      <option value='Ascendente'>Ascendente</option>
      <option value='Descendente'>Descendente</option> 
      </Select>

      <Select name='filter' onChange={handleClick} >
     
      <option value='all'>All</option> 
      <option value='Male'>Male</option>
      <option value='Female'>Female</option> 
      <option value='Genderless'>Genderless</option> 
      <option value='unknow'>Unknow</option> 
      
      </Select>

   </div>,

       <Contenedor>
     
         {myFavorites?.map(({id,name, species, image, gender})=>(
            <Card 
            id={id} 
            name={name} 
            species={species} 
            image={image} 
            gender={gender} />
         ))}
       </Contenedor>
</>
    );
}


const mapStateToProps = (state)=>{
    return{
     myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)