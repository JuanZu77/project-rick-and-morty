const {User} = require('../DB_connection');

const login = async (req, res)=>{

   const {email, password} = req.query;

   try{
      if(!email || !password){
         return res.status(400).send("Faltan Datos");
      };

      const user = await User.findOne({
         where:{email:email}
      });

      if(!user) 
         {
        return res.status(404).send("Usuario NO encontrado");
      }
      else{
        return user.password === password 
        ? res.status(200).json({access:true})
        : res.status(403).send("Contraseña Incorrecta");
      } 

   }catch(err){
     res.status(500).json({err:err.message})
   }
   
};

module.exports = login;

// const users = require ('../utils/users');

// const login = (req, res)=>{
//    const {email, password} = req.query;
//    console.log(email, password)
//    const user = users.find((user)=> user.email === email && user.password === password);

//    if (user){
//     res.status(200).json({access:true});
//    }else{
//     res.status(200).json({access:false});
//    }
// }

// module.exports = login;