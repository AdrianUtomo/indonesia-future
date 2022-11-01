module.exports = app => {
    const client = require("../controller/client.controller.js")
    var router = require("express").Router();

    //create client
    router.post("/", client.create);
    router.delete("/", client.deleteAll);
    router.get("/", client.findAll);
    router.post("/verify-email/", client.verifyEmail)
    router.post("/send-email/", client.sendEmail)
    router.post("/send-email-reset/", client.sendEmailResetPassword)
    router.post("/reset-password/", (req,res) => {
        res.redirect("http://127.0.0.1:5173")
    })
    router.post("/login", client.findOne);
 
    app.use('/api/client', router)
}