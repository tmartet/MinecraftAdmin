<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class RaspberryController extends Controller
{
    /**
     * @Route("/raspberry")
     */
    public function indexAction()
    {
        return $this->render('AdminBundle:Raspberry:index.html.twig');
    }
}
