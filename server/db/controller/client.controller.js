const sendEmail = require("../../service/sendEmail")
const db = require('../models')
const Client = db.client;
const Bcrypt = require('bcrypt')
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    //hash password 
    const salt = Bcrypt.genSaltSync(10);
    const hash = Bcrypt.hashSync(req.body.password, salt)
    
    //create client 
    const client = {
        firstname : req.body.firstname,
        lastname: req.body.lastname, 
        email: req.body.email,
        password: hash,
        active: false,
    }

    Client.create(client)
        .then(data => {
            console.log(data.email)
            const result = sendEmail.sendEmail(data.email) 
            if(result == 0){
                res.send("Error")
            } else {
                res.send("success")
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            })
        })
}

exports.findAll = (req,res) => {
    Client.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Some error occured"
            });
        });
};

exports.deleteAll = (req, res) => {
    Client.destroy({
        where: {},
        truncate: true,
        restartIdentity: true,
    })
        .then(nums => {
            res.send({message: `${nums} Tutorials were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occured"
            });
        });
}

exports.verifyEmail = (req,res) => {
    res.send(req.query.email)
}

