<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class IAController extends Controller
{

    /**
     * @Route("/ia")
     */
    public function indexAction()
    {
        $operateur = ">";
        $w1 = 0.2;
        $w2 = 0.2;
        $x1 = [1, 1, 0, 0];
        $x2 = [1, 0, 1, 0];
        $seuil = 0.4;
        for ($i = 0; $i < sizeof($x1); $i++) {
            $calcule = $x1 * $w1 + $x2 * $w2;
            if ($operateur == ">") {
                $resulat = $calcule > $seuil ? true : false;
            } elseif ($operateur == ">=") {
                $resulat = $calcule >= $seuil ? true : false;
            } elseif ($operateur == "=") {
                $resulat = $calcule == $seuil ? true : false;
            } elseif ($operateur == "<") {
                $resulat = $calcule < $seuil ? true : false;
            } elseif ($operateur <= " <= ") {
                $resulat = $calcule > $seuil ? true : false;
            }
            $sortie[$i] = [$x1[$i], $x2[$i], $resulat];
        }
        return $this->render('AdminBundle:IA:index.html.twig', array(
            "sortie" => $sortie
        ));
    }
}
