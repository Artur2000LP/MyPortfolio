<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    // Configura la dirección de correo a la que deseas enviar el mensaje
    $destinatario = "letonaporrasarturo@gmail.com";
    $asunto = "Nuevo mensaje de contacto desde tu sitio web";

    // Construye el cuerpo del mensaje
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Correo: $correo\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    // Encabezados del correo
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";

    // Envía el correo
    mail($destinatario, $asunto, $cuerpoMensaje, $headers);

    // Redirecciona al usuario después de enviar el formulario
    header("Location: index.html");
}
?>