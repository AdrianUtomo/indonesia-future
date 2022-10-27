module.exports = app => {
    const freelancer = require("../controller/freelancer.controller.js")
    var router = require("express").Router();

    router.post("/", freelancer.create);
    router.delete("/", freelancer.deleteAll);
    router.get("/", freelancer.findAll);
    router.post("/verify-email/", freelancer.verifyEmail)
    router.post("/send-email", freelancer.sendEmail)
    router.post("/login", freelancer.findOne);

    app.use('/api/freelancer', router)
}