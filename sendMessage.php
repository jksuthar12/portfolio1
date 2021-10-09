<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug  = 0;
$mail->SMTPAuth   = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port       = 587;
$mail->Host       = "smtp-relay.sendinblue.com";
$mail->Username   = "jksuthar0225@gmail.com";
$mail->Password   = "bNafq4rgWU5J2SIx";
$mail->IsHTML(true);

  $mail->AddAddress("jksuthar0226@gmail.com");
$mail->SetFrom("no-reply@cpcommunity.tech", "PortFolio");
$mail->Subject = "SomeOne contacted to you";
$content = "Hello Fucking people";
$mail->MsgHTML($content);
if (!$mail->Send()) {
  echo "Error while sending Email.";
  var_dump($mail);
} else {
  echo "ok";
}

?>