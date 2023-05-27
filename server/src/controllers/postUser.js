const {User} = require('../DB_connection');

const postUser = async (req, res) => {
      try{
          const {email, password} = req.body;
          if(!email || !password){
             return res.status(400).send("Faltan Datos");
          }else{
            const user = await User.findOrCreate({
                where:{
                  email:email,
                  password: password,
                }
            });
            return res.status(200).json(user);
          } 

      }catch(err){
        return res.status(500).json({err: err.message});
      }
};

module.exports = postUser;