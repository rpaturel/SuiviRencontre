<?php
    function console_log($data){
        $output = $data;
        if (is_array($output))
        $output = implode(',', $output);
    }

    header("Access-Control-Allow-Origin: *");

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "suivirencontre";

    //Creation de la connexion
    try{
        $conn = new mysqli($servername, $username, $password, $dbname);
    //Verification de la connexion
    if ($conn->connect_error) {
        die("Connection echoue: " . $conn->connect_error);
        console_log("Connexion echouee");
    }
    else {
        console_log("Connexion reussie");
    }
    //Connexion reussi
    $sql = "SELECT firstname, lastname FROM agentcommercial";
    $result = mysqli_query($conn,$sql);
    $myArray = array();
    if ($result->num_rows > 0) {
        //output data of each row
        while($row = $result->fetch_assoc()) {
            $myArray[] = array_map("utf8_encode", $row);
        }
        print json_encode($myArray);
        return $myArray;
    }
    else {
        echo "0 results";
    }
    } catch (PDOException $e){
        console_log("une erreur est survenue");
    }
?>