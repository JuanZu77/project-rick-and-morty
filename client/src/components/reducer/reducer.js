import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from '../reducer/actionsTypes';

const initialState = {
         myFavorites: [],
         allCharacters:[]
};


const reducer = (state=initialState, {type, payload}) =>{
               
           switch(type){
            
            // case ADD_FAVORITES:
            //     return{
            //         ...state,   
            //        myFavorites: [...state.allCharacter, payload],
            //        allCharacter: [...state.allCharacter, payload] 
                   
            //     }
             case ADD_FAVORITES:
                return { ...state, 
                    myFavorites: payload, 
                    allCharacters: payload 
                };

         
    // case DELETE_FAVORITES:
                
            //       const filtered = state.myFavorites.filter((character)=> character.id !== payload)
            //     return {
            //         ...state, myFavorites: filtered, allCharacter: filtered
            //     }

            case DELETE_FAVORITES:
                return { ...state, 
                    myFavorites: payload,
                    allCharacters: payload,
                };


                case FILTER:
                    let copy = [...state.allCharacters]
                    if (payload==='all'){
                       return {...state, myFavorites: copy}
                    }else{
                       const filterByGender = [...state.allCharacters].filter((char)=>char.gender === payload) 
                       return{
                           ...state,
                           myFavorites:  filterByGender,
                       }
                   };

                
             case ORDER:
                const filterByOrder = [...state.allCharacters].sort((a,b)=>{
                    if(a.id > b.id){ 
                        return payload === 'Ascendente' ? 1 : -1

                    }else if(a.id < b.id){
                        return payload === 'Descendente' ? 1 : -1
                    }
                    else{ //iguales
                       return 0;
                    }
                });
                return {
                    ...state,
                    myFavorites: filterByOrder,
                };      

            default:
                return {...state}
           }
};


export default reducer;

            // const filterByGender = [...state.allCharacter].filter((char)=>char.gender.toLowerCase() === payload.toLowerCase());
            // return{
            //        ...state,
            //        myFavorites: filterByGender
            // };