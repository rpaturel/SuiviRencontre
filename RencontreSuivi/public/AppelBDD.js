function getManager(){
	return new Promise((resolve, reject) => {
		fetch('http://localhost:80/getManager.php').then(data => { //Connexion à la BDD dans C:/xampp/htdocs (localhost parce que dans htdocs / :80 parce que port 80 par Apache utilisé dans Xampp)
			data = data.json();
			resolve(data);
			
	    }).catch(function (e){
			console.log(e);
		}
		)})
};

function getCompany(){
	return new Promise((resolve, reject) => {
		fetch('http://localhost:80/getCompany.php').then(data => { //Connexion à la BDD dans C:/xampp/htdocs (localhost parce que dans htdocs / :80 parce que port 80 par Apache utilisé dans Xampp)
			data = data.json();
			resolve(data);
			
	    }).catch(function (e){
			console.log(e);
		}
		)})
};

function getMeeting(){
	return new Promise((resolve, reject) => {
		fetch('http://localhost:80/getMeeting.php').then(data => { //Connexion à la BDD dans C:/xampp/htdocs (localhost parce que dans htdocs / :80 parce que port 80 par Apache utilisé dans Xampp)
			data = data.json();
			resolve(data);
			
	    }).catch(function (e){
			console.log(e);
		}
		)})
};