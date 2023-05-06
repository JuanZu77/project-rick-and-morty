//DETALLE del PERSONAJE

import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import styles from "../detail/DetailStyle.module.css";

export default function Detail (props){

    const {detailId} = useParams()
    const [character, setCharacter] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
        .then((response) => response.json())
        .then((data)=>{
                   data.name ?  setCharacter(data) : alert("No existen Personas con el ID ingresado")

        })
        .catch((err)=>{
            console.log(err)
            alert("Ups, algo salió mal")
        })

        }, [detailId]);

return (
    <div>

        <div>
            <button className={styles.button} onClick={()=>navigate("/home")}>Regresar</button>
        </div>

        <div className={styles.container}>
            <div>
                <div>
                <h1 className={styles.name}> <u>Name:</u> {character.name}</h1>
                </div>

                <div className={styles.info}>
                <h1> <u>Status:</u> {character.status}</h1>
                <h1> <u>Specie:</u> {character.species}</h1>
                <h1> <u>Gender:</u> {character.gender}</h1>
                <h1> <u>Origin:</u> {character.origin?.name}</h1>
                <h1> <u>Location:</u> {character.location?.name}</h1>
                </div>
            </div> 

            <img className={styles.image} src={character.image} alt="Not Found"></img> 
        
        </div>

    </div>
    )
}