function getData(){
	return new Promise((resolve, reject) => {
		console.log("before");
		fetch('http://localhost:80/ConnexionBDD.php').then(data => { //Connexion à la BDD dans C:/xampp/htdocs (localhost parce que dans htdocs / :80 parce que port 80 par Apache utilisé dans Xampp)
			data = data.json();
			console.log("in fetch");
			console.log("data : "+data);
			resolve(data);
			
	    }).catch(function (e){
			console.log(e);
		}
		)})
};