<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class serveurMinecraftController extends Controller
{
    /**
     * @Route("/serveurminecraft")
     */
    public function indexAction()
    {

        return $this->render('AdminBundle:ServeurMinecraft:index.html.twig');
    }
}
