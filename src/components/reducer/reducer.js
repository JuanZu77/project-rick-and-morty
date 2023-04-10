import {ADD_FAVORITES, DELETE_FAVORITES} from '../reducer/actionsTypes';

const initialState = {
         myFavorites: []
};


const reducer = (state=initialState, {type, payload}) =>{
               
           switch(type){
            
            case ADD_FAVORITES:
                return{
                    ...state,   
                   myFavorites: [...state.myFavorites, payload] 
                                //...state.favorites = copia de lo que tenemos, 
                                //paylod = el nuevo personaje agregado a favoritos  
                }
            case DELETE_FAVORITES:
                
                  const filtered = state.myFavorites.filter((character)=> character.id !== payload)
                return {
                    ...state,
                    myFavorites: filtered
                }

            default:
                return {...state}
           }
};


export default reducer;