const { response, request } = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendMessage = async(req, res)=>{
    console.log("Llega la peticion")
    const {from , to, msg} = req.body;

    await client.messages
    .create({
        body: msg,
        from: from,
        to: to
    })
    .then(message => res.json({
            sid : message.sid
        }
    ));
}

module.exports = {
    sendMessage
}