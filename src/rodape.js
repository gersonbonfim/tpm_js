//escutando status do firebase

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	user_displayName 	= user.displayName;
    user_email 			= user.email;
    user_emailVerified 	= user.emailVerified;
    user_photoURL 		= user.photoURL;
    user_isAnonymous 	= user.isAnonymous;
    user_uid 			= user.uid;
    user_providerData 	= user.providerData;
	user_token			= user.getIdToken();
	//console.log(user_token);
	
	
	
	var resultado = "";
	//for (var i in user_token) {
    //    resultado += "<br>" + i + " = " + user_token[i] + "\n";
	//}
	//console.log(resultado);
	document.getElementById("rodape").innerHTML = "<font size=1>Usuário : " + user_displayName + "</font>";
	//document.getElementById("rodape").innerHTML = user_displayName + "<br>" + user_email + "<br>" + user_uid + "<br>" + resultado + "<br>" ;
  }
});
