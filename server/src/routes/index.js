
const express = require('express');
const { getCharById, 
        login, 
        postFav, 
        deleteFav 
       } = require ('../controllers/index');

const postUser = require('../controllers/postUser');

const router = express.Router();

router.post('/login', postUser);
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav',postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;



// const express = require('express');
// const { getCharById, 
//         login, 
//         postFav, 
//         deleteFav 
//        } = require ('../controllers/index');

// const router = express.Router();


// router.get('/character/:id', getCharById);
// router.get('/login', login);
// router.post('/fav',postFav);
// router.delete('/fav/:id', deleteFav);

// module.exports = router;