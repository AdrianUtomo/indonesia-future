const sendEmail = require("../../service/sendEmail")
const db = require('../models')
const Client = db.client;
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const accessTokenSecret = "youraccesstokensecret";
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
            const result = sendEmail.sendEmailClient(data.email) 
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

exports.findOne = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    Client.findOne({where: {email: email, active: true}})
        .then((data) => {
            Bcrypt.compare(password, data.password)
                .then(() => {
                    const accessToken = jwt.sign({
                        "email" : data.email,
                        "firstname" : data.firstname,
                        "lastname": data.lastname
                    }, accessTokenSecret);
                    res.send(accessToken);
                })
                .catch(err => {
                    console.log('ERROR')
                    res.send(err.message)
                })
        })
        .catch(err=> { //username salah
            console.log("ERROR")
            res.send(err.message)
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
    const email = req.query.email;
    Client.update({active: true}, {where: {email: email}})
    res.send("Update Complete")
}

exports.sendEmail = (req,res) => {
    const email = req.body.email
    const result = sendEmail.sendEmailClient(email) 
    if(result == 0){
        res.send("Error")
    } else {
        Client.findOne({where: {email: email}})
            .then(() => {
                res.send("Success send Email")
            })
            .catch(err => {
                console.log('ERROR')
                res.send("Email not registered")
            })
    }
}

exports.sendEmailResetPassword = (req,res) => {
    const email = req.body.email
    const result = sendEmail.sendEmailResetPassword(email) 
    if(result == 0){
        res.send("Error")
    } else {
        Client.findOne({where: {email: email}})
            .then(() => {
                res.send("Success send Email")
            })
            .catch(err => {
                console.log('ERROR')
                res.send("Email not registered")
            })
    }
}

