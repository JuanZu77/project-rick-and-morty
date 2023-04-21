import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from '../reducer/actionsTypes';

export const addFavorites =(character)=>{
      return{
        type: ADD_FAVORITES,
        payload: character
      }
};

export const deleteFavorites =(id)=>{
    return{
        type: DELETE_FAVORITES,
        payload: id
    }
};

export function filterCards (gender){
   return{
    type: FILTER,
    payload: gender
   }
};

export function orderCards (orden){
  return{
   type: ORDER,
   payload: orden
  }
};