<?php

// Config
include 'config.php';

// Routing
$q = !empty($_GET['q']) ? $_GET['q'] : '';

if($q === '' || $q === 'start_play')
{
    $page = 'start_play';
}
else if($q === 'credits')
{
    $page = 'credits';
}
else if($q === 'home')
{
    $page = 'home';
}

else
{
    $page = '404';
}

// Includes
include 'views/partials/header.php';
include 'views/pages/'.$page.'.php';
include 'views/partials/footer.php';