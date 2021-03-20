const express= require('express');
const router = express.Router()

const {create, catergoryById, read, update, remove, list} = require('../controllers/category');
const {requireSignin, isAdmin, isAuth} = require('../controllers/auth');
const {userById} = require('../controllers/user');
const category = require('../models/category');

router.get('/category/:categoryId', read); 
router.post("/category/create/:userId",requireSignin,isAuth, isAdmin, create);

router.put("/category/:categoryId/:userId",requireSignin,isAuth, isAdmin, update);
router.delete("/category/:categoryId/:userId",requireSignin,isAuth, isAdmin, remove);
router.get('/categories', list); 


// router.get("/hello", requireSignin, (req, res) => {
//     res.send("hello, there");
// }); 

router.param('categoryId', catergoryById)
router.param('userId', userById)

module.exports = router;