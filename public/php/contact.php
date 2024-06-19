<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    $to = "miguelmiguezangel@gmail.com"; // Reemplaza esto con tu dirección de correo electrónico
    $subject = "Mensaje de contacto desde el sitio web";
    $message = "Nombre: $name\nApellido: $surname\nEmail: $email\nTeléfono: $number\n";
    $headers = "From: $email";

    $mail_success = mail($to, $subject, $message, $headers);

    if ($mail_success) {
        echo json_encode(["status" => "success", "message" => "Correo enviado correctamente."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al enviar el correo."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método de solicitud no permitido."]);
}
?>
