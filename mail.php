<?php
$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$entreprise = $_POST['entreprise'];
$pays = $_POST['pays'];
$message = $_POST['message'];

header('Content-Type: application/json');
if ($name === ''){
print json_encode(array('message' => 'Vérifiez le nom svp', 'code' => 0));
exit();
}

if ($entreprise === ''){
print json_encode(array('message' => "Veuillez définir votre entreprise svp", 'code' => 0));
exit();
}
if ($pays === ''){
print json_encode(array('message' => "Veuillez définir votre Pays ou votre ville svp", 'code' => 0));
exit();
}
if ($subject === ''){
print json_encode(array('message' => "Quel est l'objet de votre demande", 'code' => 0));
exit();
}
if ($email === ''){
print json_encode(array('message' => "L'adresse mail doit être saisie", 'code' => 0));
exit();
} else {
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
exit();
}
}
if ($telephone === ''){
print json_encode(array('message' => 'Veuillez saisir votre contact svp', 'code' => 0));
exit();
}else {
  if (!isPhone($telephone)){
  print json_encode(array('message' => 'contact format invalid.', 'code' => 0));
  exit();
}
}
if ($message === ''){
print json_encode(array('message' => 'Quel est votre message ?', 'code' => 0));
exit();
}

$to = 'davjosnayo@gmail.com';
$subjects = 'Horeb Technology';
$headers = "From: " . strip_tags($email) . "\r\n";
$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$content = '<html><body>';
$content .= '<p><span style="font-size: 4rem; color: orange; font-weight: bold;">HT</span><span style="color: gray; font-size: 2rem;"><strong>.horeb technology</strong></span></p>';
$content .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$content .= "<tr style='background: #eee;'><td><strong>Nom </strong> </td><td>" . strip_tags($name) . "</td></tr>";
$content .= "<tr><td><strong>Email </strong> </td><td>" . strip_tags($email) . "</td></tr>";
$content .= "<tr><td><strong>Telephone </strong> </td><td>" . strip_tags($telephone) . "</td></tr>";
$content .= "<tr><td><strong>Entreprise </strong> </td><td>" . strip_tags($entreprise) . "</td></tr>";
$content .= "<tr><td><strong>Pays / Ville </strong> </td><td>" . strip_tags($pays) . "</td></tr>";
$content .= "<tr><td><strong>Objet de la demande:</strong> </td><td>" . $subject . "</td></tr>";
$content .= "</table>";
$content .= "<h1><strong>Message</strong> </h1><h3>" . htmlentities($message) . "</h3>";
$content .= "</body></html>";

mail($to, $subjects, $content, $headers) or die("Error!");
print json_encode(array('message' => 'Email envoyé!', 'code' => 1));
exit();





function isEmail($email) 
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
function isPhone($phone) 
{
    return preg_match("/^[0-9-+]+$/",$phone);
}
function test_input($data) 
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

