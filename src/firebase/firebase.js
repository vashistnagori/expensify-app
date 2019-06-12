import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db= firebase.database();

export {firebase, db as default};


//  db.ref('expense').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
//  });

//  db.ref('expense').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//    });


// db.ref('expense').once('value')
// .then((snapshot)=>{
//     const expenses=[];
//         snapshot.forEach((childSnapshot)=>{
//                 expenses.push({
//                     ...childSnapshot.val(),
//                     id:childSnapshot.key
//                 });
//         });
//        // console.log(expenses);
// });




//   db.ref().set({
//       name:'vashist',
//       stressLevel:6,
//       job:{
//           title:"Software operation analyst",
//           company:"SkipTheDishes"
//       },
//       age:26,
//       location:{
//             city:"Winnipeg", country: 'Canada'
//       },
//       isSingle:false
//   }).then(()=>{
//       console.log("data was set");
//   }).catch((e)=>{
//     console.log("data was NOT set", e);
//   });



//  testexp.forEach((c,i)=>{
//      db.ref('expense').push(c);
//  });