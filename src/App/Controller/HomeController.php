<?php

namespace Deshboard\App\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\HtmlResponse;

final class HomeController
{
    /**
     * @Inject
     * @var \Twig_Environment
     */
    private $twig;

    public function __invoke(ServerRequestInterface $request): ResponseInterface
    {
        return new HtmlResponse($this->twig->render('home.html.twig'));
    }
}
