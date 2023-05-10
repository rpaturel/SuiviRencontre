<?php
    include "http://localhost:80/ConnexionBDD.php";

    // Vérifier si le formulaire est soumis 
    if ( isset( $_POST["submit"] ) ) {
        /* récupérer les données du formulaire en utilisant 
        la valeur des attributs name comme clé 
        */
        $date = $_POST['date'];
        $agent = $_POST['agent']; 
        $detail = $_POST['detail'];

        $sqlquery = "INSERT INTO meeting VALUES ($date, $agent, $detail)";
        
        if ($conn->query($sqlquery) === TRUE) {
            echo "record inserted successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        exit;
    }

?>