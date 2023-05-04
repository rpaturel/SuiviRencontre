function getData(){
	console.log("test getData");
	return new Promise((resolve, reject) => {
		fetch('../php/ConnexionBDD.php').then(data => { //Connexion à la BDD
			data = data.json();
			console.log(data);
			resolve(data);
			
	    }).catch(function (e){
			console.log(e);
		}
		)})
};


//en cas de besoin d'attendre
function delay(second){
    return new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("ok"); // After 3 seconds, resolve the promise with value ok
    }, second);
    })
};