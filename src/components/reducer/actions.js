import {ADD_FAVORITES, DELETE_FAVORITES} from '../reducer/actionsTypes';

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