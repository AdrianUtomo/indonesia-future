var nodemailer = require('nodemailer')

exports.sendEmail = (email) => {
    var email = email;

    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testprived@gmail.com',
            pass: 'gjmmhbniktyywumv'
        }
    })

    var mailOptions = {
        from: 'testprived@gmail.com',
        to: email,
        subject: 'Verification Account - Indonesia Future',
        html: '<p>You requested for email verification, kindly use this <form action="http://localhost:8080/api/client/verify-email/?email=' + email + '" method="POST"><button>link</button></form> to verify your email address</p>'
    }

    mail.sendMail(mailOptions, function(error, info) {
        if (error){
            console.log(error)
            return 1
        } else {
            console.log(info)
            return 0
        }
    })
}
