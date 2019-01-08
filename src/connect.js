var config = {
    apiKey: "AIzaSyCH4VZBCxXlgmGz2glq2NBOrmzShAZUzdI",
    authDomain: "tpm-db.firebaseapp.com",
    databaseURL: "https://tpm-db.firebaseio.com",
    projectId: "tpm-db",
    storageBucket: "tpm-db.appspot.com",
    messagingSenderId: "542799716543"
  };
  

firebase.initializeApp(config);

var db = firebase.firestore();

const settings = { timestampsInSnapshots: true};
db.settings(settings);

function fazer_logoff()
{
 
//Ação de deslogar usuário 

    firebase.auth().signOut();
	document.getElementById("msg_auth").innerHTML =  "";		

}

