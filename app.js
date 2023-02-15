const express = require('express');
const nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2');

const app = express();

app.get('/',(req,res)=>{
    function sendMails() {

        // const gmail = {
        //     user:'',
        //     clientId:"",
        //     clientSecret:"",
        //     refreshToken:""
        // }

        // const generator = function() {
        //   var g = xoauth2.createXOAuth2Generator(gmail);
        //   g.on('token',function(token){
        //     console.log(`new token  ${token.user} ${token.accessToken}`);
        //   })
        //   return g;
        // }

        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          // auth: {xoauth2: generator()}
          auth: {
            user: 'satake.satake.y@gmail.com',
            pass: ''
          }
        });

        transporter.sendMail({
          from: "satake.satake.y@gmail.com",
          to: "satake.satake.y@gmail.com",
          subject: "testmail",
          text: "this is a test"
        });
    }

    sendMails();
    res.render('hello.ejs');
});

app.listen(3000);