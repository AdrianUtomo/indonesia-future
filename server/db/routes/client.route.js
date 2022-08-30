module.exports = app => {
    const client = require("../controller/client.controller.js")
    var router = require("express").Router();

    //create client
    router.post("/", client.create);
    router.delete("/", client.deleteAll);
    router.get("/", client.findAll);

    app.use('/api/client', router)
}