
import {connect} from 'react-redux';
import Card from '../card/Card';
import {Contenedor} from '../assets/styledComponentes';



 
 function Favorites ({myFavorites}){
    return(
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
    );
}

//Necesitamos escuchar la lista de favoritos
const mapStateToProps = (state)=>{
    return{
     myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)