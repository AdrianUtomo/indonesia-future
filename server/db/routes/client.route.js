module.exports = app => {
    const client = require("../controller/client.controller.js")
    var router = require("express").Router();

    //create client
    router.post("/", client.create);
    router.delete("/", client.deleteAll);
    router.get("/", client.findAll);
    router.post("/verify-email/", client.verifyEmail)
    router.post("/send-email/", client.sendEmail)
    router.post("/login", client.findOne);
 
    app.use('/api/client', router)
}