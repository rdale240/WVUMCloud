const functions = require('firebase-functions');
const admin = require('firebase-admin');
//const express = require('express');
admin.initializeApp();
var database =admin.database();

// var app = express();

// app.get('/', function(request, response) {
//     response.send("Express with Firebase");
// });

// const api1 = functions.https.onRequest(app)

// module.exports = {
//   api1
// }


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.getDJ = functions.https.onRequest((request, response) => {
    var db = database.ref('/');
    db.once('value').then(snap => {
        console.log(snap.val())
        response.json(snap.val()).status(200);
    })
});

exports.setDJ = functions.https.onRequest((request, response) => {
    console.log(request.body);
    if (request.body.currentDJ)
    {
        newDJ = request.body.currentDJ;
        res = { "status": "updated DJ",
                "newDJ": request.body.currentDJ };
        var db = database.ref('/');
        db.update({
            currentDJ: request.body.currentDJ
        }).then(() => {
            response.json(res).status(200);
        })
    }
    else
    {
        response.status(400).send({
            "status":"failed",
            "message":"Bad Request"
        })
    }
    
  
});
