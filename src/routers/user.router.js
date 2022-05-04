
module.exports =(app) =>{
var router = require("express").Router();
const userController = require('../controllers/user.controller');

router.get('/user', userController.list);
router.post('/user', userController.create);
router.get('/user/:id', userController.findOne);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);


app.use("/",router);
}

