module.exports = app => {
    const freelancer = require("../controller/freelancer.controller.js")
    var router = require("express").Router();

    router.post("/", freelancer.create);
    router.delete("/", freelancer.deleteAll);
    router.get("/", freelancer.findAll);
    router.post("/verify-email/", freelancer.verifyEmail)
    router.post("/send-email", freelancer.sendEmail)
    router.post("/login", freelancer.findOne);
    router.post("/reset-password/", (req,res) => {
        res.redirect("http://127.0.0.1:5173")
    })

    app.use('/api/freelancer', router)
}