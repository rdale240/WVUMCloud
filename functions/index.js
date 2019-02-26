const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getDJ = functions.https.onRequest((request, response) => {
    admin.initializeApp();
    var db = admin.database().ref('/');
    db.once('value').then(snap => {
        console.log(snap.val())
        response.send(snap.val());
    })
});

exports.setDJ = functions.https.onRequest((request, response) => {
    admin.initializeApp();
    console.log(request);
    res = { "status": "updated DJ" };
    var db = admin.database().ref('/');
    db.update({
        currentDJ: "Charles"
    }).then(() => {
        response.send(res)
    })
});
