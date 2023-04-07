import React, {useState} from "react";
import styles from "../form/FormStyles.module.css";

import validate from "./validate";


export default function Form (props){

    //Paso 2 Estados
    const [userData, setUserData] = useState({
        userName:"",
        password:""
    })

    //Paso 4 Errores
    const [errors, setErrors] = useState({
        userName:"",
        password:""
    })

    //Paso 3 Cambios en los Inputs
    const handleChange = (event) =>{
      const {name, value} = event.target;

      setUserData({...userData, [name]:value
      });
   
      //Paso 6 
      setErrors(validate({...userData,[name]:value
      })
      );
   };

//Paso 5 Validaciones --> crear validaciones (importadas de validate.js)

//Por Ultimo onSubmit (handleSubmit)para el ingreso
  const handleSubmit = (event) =>{
      event.preventDefault();
      props.login(userData)
  }
  
//Paso 1 Crear Form 
    return(
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>
         
      <img className={styles.img} alt=""></img>

         <div className={styles.divLabelForm}>
            <label className={styles.label} htmlfor="">Username</label>
            <input type="text" name="userName" value={userData.userName} onChange={handleChange}>
            </input>
            {/*Si existe userName renderiza el errors para userName */}
            {errors.userName ? <p className={styles.warning}>{errors.userName}</p> : null }
        </div>

        <div className={styles.divLabelForm}>
            <label className={styles.label} htmlfor="">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}>
            </input>
            {/*Si existe un error renderiza el errors para password */}
            {errors.password? <p className={styles.warning}>{errors.password}</p> : null }
        </div>
                <button type="submit" className={styles.button}>Login</button>
        </form>

        </div>
    )
};