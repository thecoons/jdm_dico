<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use GraphAware\Neo4j\Client\ClientBuilder;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
      $em = $this->container->get('neo4j.manager');
      $client = ClientBuilder::create()
                ->addConnection('default', 'http://neo4j:yodalapute123@localhost:7474')
                ->build();
      $query = 'match (n:termes)<-[r]-() where n.name = "rapidement" and type(r) = "34" return n limit 20';
      $result = $client->run($query);
      $arr = array();
      foreach ($result->records() as $record) {
        array_push($arr,$record->nodeValue('n')->values());
      }
      return $this->render('AppBundle:Default:index.html.twig',array("result" => $arr));
    }

    /**
    * @Route("/test",name="testpage")
    */
    public function testAction(Request $request)
    {
      $em = $this->container->get('neo4j.manager');
      $client = ClientBuilder::create()
                ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
                ->build();
      $query = 'match (n:termes)<-[r]-() where n.name = "rapidement" and type(r) = "34" return n limit 20';
      $result = $client->run($query);
      $arr = array();
      foreach ($result->records() as $record) {
        array_push($arr,$record->nodeValue('n')->values());
      }
      $response = new Response(json_encode($arr));
      $response->headers->set('Content-Type','application/json');

      return $response;
    }
}
