
let myFavorites = [];

const postFav = (req, res)=>{
  //  const {character} = req.body;

    myFavorites.push(req.body);
    res.json(myFavorites);
};


const deleteFav = (req, res) =>{
    const {id} = req.params;

    myFavorites = myFavorites.filter((fav)=>fav.id !== parseInt(id));
    res.json(myFavorites); //array filtrado
};

module.exports={postFav, deleteFav};