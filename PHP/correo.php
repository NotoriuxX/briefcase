<?php

if(isset($_POST['send'])){
    if(!empty($_POST['name']) && !empty($_POST['subject']) && !empty($_POST['Comments']) && !empty($_POST['email'])){
        //llamar campos
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $Comments = $_POST['Comments'];
        $email = $_POST['email'];
        $addressee = "manuelmeryz@gmail.com";
        //datos del correo
        $affair = "Contacto de la web $subject";
        $letter = "De: $name \n";
        $letter .= "Correo: $email \n";
        $letter .= "Mensaje: $Comments";
        //enviar mensaje
        mail($addressee,$affair,$letter);
        
    }
}