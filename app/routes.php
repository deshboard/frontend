<?php

return [
    ['GET', '/', \Deshboard\App\Controller\HomeController::class],
    ['GET', '/error', [\Deshboard\App\Controller\ErrorController::class, 'error']],
    ['GET', '/404', [\Deshboard\App\Controller\ErrorController::class, 'notFound']],
    ['GET', '/custom404', [\Deshboard\App\Controller\ErrorController::class, 'customNotFound']],
    ['GET', '/404exception', [\Deshboard\App\Controller\ErrorController::class, 'notFoundException']],
];
