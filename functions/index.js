// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.addExchangeToProfile = functions.firestore
  .document('exchanges/{exchangeId}')
  .onCreate((change, context) => {
    const { exchangeId } = context.params
    const addedExchange = change.data()

    db.collection('profiles')
      .doc(addedExchange.user.id)
      .update({
        exchanges: admin.firestore.FieldValue.arrayUnion({
          id: exchangeId,
          title: addedExchange.title,
          type: addedExchange.type,
          price: addedExchange.price
        })
      });
  });


exports.addOpportunityToSendOnes = functions.firestore
  .document('opportunities/{opportunityId}')
  .onCreate((change, context) => {
    const { opportunityId } = context.params
    const addedOpportunity = change.data()

    db.collection('profiles')
      .doc(addedOpportunity.fromUser.id)
      .update({
        sendOpportunities: admin.firestore.FieldValue.arrayUnion({
          id: opportunityId,
          title: addedOpportunity.title,
          exchangeTo: addedOpportunity.toExchange,
          status: addedOpportunity.status
        })
      });
  });

exports.addOpportunityToUser = functions.firestore
  .document('opportunities/{opportunityId}')
  .onCreate((change, context) => {
    const { opportunityId } = context.params
    const addedOpportunity = change.data()

    db.collection('profiles')
      .doc(addedOpportunity.toUser.id)
      .update({
        opportunities: admin.firestore.FieldValue.arrayUnion({
          id: opportunityId,
          title: addedOpportunity.title,
          status: addedOpportunity.status
        })
      });
  });



// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});