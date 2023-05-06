import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from '../reducer/actionsTypes';

import axios from 'axios';
// -- Sin express --
// export const addFavorites =(character)=>{
//       return{
//         type: ADD_FAVORITES,
//         payload: character
//       }
// };

export const addFavorites = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
               type: ADD_FAVORITES,
               payload: data,
        });
     });
  };
};

// -- Sin express --
// export const deleteFavorites =(id)=>{
//     return{
//         type: DELETE_FAVORITES,
//         payload: id
//     }
// };

export const deleteFavorites = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
     return dispatch({
         type: DELETE_FAVORITES,
         payload: data,
      });
    });
  };
};

export function filterCards (gender){
   return{
    type: FILTER,
    payload: gender,
   }
};

export function orderCards (orden){
  return{
   type: ORDER,
   payload: orden
  }
};