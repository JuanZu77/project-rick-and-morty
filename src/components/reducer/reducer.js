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