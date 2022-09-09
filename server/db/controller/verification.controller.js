import { sendEmail } from '../../service/sendEmail';
const db = require('../models')
const Verification = db.verification;

exports.findByEmail = (req,res) => {
    const email = req.body.email;
    var condition = nama ? {email: `${email}`} : null;

    Verification.findAll({where: condition})
        .then(data => {
            if (data.length > 0) {
                var token = randtoken.generate(20);
                if(data[0].verify == 0) {
                  var sent = sendEmail(email,token)
                  if (sent != '0') {
                    var change = {
                        token: token
                    }
                    Verification.update({change}, {where : {
                        condition
                    }})
                  } 
                }
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Some error occured"
            });
        });
};

exports.verifyEmail = (req,res) => {
    const token = req.query.token
    var condition = {token: `${token}`}

    Verification.findAll({where: condition})
        .then(data => {
            if(data[0].verify == 0) {
                var data = {verify : 1}
                Verification.update({change}, {where: condition})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occured"
            })
        })
}
