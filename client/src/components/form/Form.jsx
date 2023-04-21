import React, {useState} from "react";
import styles from "../form/FormStyles.module.css";

import validate from "./validate";


export default function Form (props){

    const [userData, setUserData] = useState({
        userName:"",
        password:""
    })


    const [errors, setErrors] = useState({
        userName:"",
        password:""
    })

    const handleChange = (event) =>{
      const {name, value} = event.target;

      setUserData({...userData, [name]:value
      });
   
      setErrors(validate({...userData,[name]:value
      })
      );
   };


  const handleSubmit = (event) =>{
      event.preventDefault();
      props.login(userData)
  }
  

    return(
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>
         
      <img className={styles.img} alt=""></img>

         <div className={styles.divLabelForm}>
            <label className={styles.label} htmlfor="">Username</label>
            <input type="text" name="userName" value={userData.userName} onChange={handleChange} placeholder="ejemplo@gmail.com">
            </input>
   
            {errors.userName ? <p className={styles.warning}>{errors.userName}</p> : null }
        </div>

        <div className={styles.divLabelForm}>
            <label className={styles.label} htmlfor="" >Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="1password">
            </input>

            {errors.password? <p className={styles.warning}>{errors.password}</p> : null }
        </div>
                <button type="submit" className={styles.button}>Login</button>
        </form>

        </div>
    )
};