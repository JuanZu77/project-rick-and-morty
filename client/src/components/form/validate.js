

/* FUNCION PARA VALIDAR */
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validLetterAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/)

  export default function validate (inputs){
    const errors = {};

            //validaciones del "USERNAME"    
            if(!regexEmail.test(inputs.userName)){
            errors.userName="Debe ser un correo electrónico"
            }
            if(!inputs.userName){
            errors.userName="No puede estar vacío"
            }
            if(inputs.userName.length > 35){
            errors.userName="Máximo 35 caracteres"
            }
            
            //validaciones del "PASSWORD"
            if(!validLetterAndNumbers.test(inputs.password)){
            errors.password = "Debe contener como mínimo un número"
            } 
            if(inputs.password.length < 6 || inputs.password.length > 10){
            errors.password = "Debe contener entre 6 y 10 caracteres"
            }

        return errors;
};