<?php
$res = filter_var('zvonimir.antol@yahoo.com', FILTER_VALIDATE_EMAIL);

echo '<pre>';
var_dump($res);
echo '</pre>';