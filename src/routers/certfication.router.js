module.exports = app =>{
    
    var router =  require("express").Router();

    const CertifController = require('../controllers/certification.controller');
    
    router.get('/certification/:id', CertifController.get);
    router.get('/certification', CertifController.generate);
    router.post('/certification', CertifController.create);
    router.put('/certification/:id', CertifController.update);
    router.delete('/certification/:id', CertifController.remove);
    app.use('/',router);
    
};

