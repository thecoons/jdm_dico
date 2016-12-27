<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use GraphAware\Neo4j\Client\ClientBuilder;

class DicoApiController extends Controller
{
    /**
     * @Route("/grammaire/{mot}",name="grammaire_page")
     */
    public function grammaireAction($mot)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes)-[r]->(m) WHERE n.name = "%s" and type(r) = "4" return m ORDER BY r.weight DESC',$mot);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('m')->values());
        }
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }

    /**
     * @Route("/definition/{mot}",name="definition_page")
     */
    public function definitionAction($mot)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes),(def:definitions) WHERE n.name = "%s" and toInt(n.eid) = def.termid return def',$mot);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('def')->values());
        }
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }

    /**
     * @Route("/lemme/{mot}",name="lemme_page")
     */
    public function lemmeAction($mot)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes)<-[r]-(lem:termes) WHERE n.name = "%s" and type(r) = "19" return lem',$mot);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('lem')->values());
        }
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }

    /**
     * @Route("/associ/{mot}/{nb}",name="associ_page")
     */
    public function associAction($mot,$nb)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes)<-[r]-(asso:termes) WHERE n.name = "%s" and type(r) = "0" return asso order by r.weight desc limit %d',$mot,$nb);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('asso')->values());
        }
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }
    /**
     * @Route("/domain/{mot}/{nb}",name="domain_page")
     */
    public function domainAction($mot,$nb)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes)-[r]->(dom:termes) WHERE n.name = "%s" and type(r) = "3" return dom order by r.weight desc limit %d',$mot,$nb);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('dom')->values());
        }
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }

    /**
     * @Route("/raff_sem/{mot}/{nb}",name="raff_sem_page")
     */
    public function raffSemAction($mot,$nb)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes)-[r]->(raff:termes) WHERE n.name = "%s" and type(r) = "1" return raff order by r.weight desc limit %d',$mot,$nb);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('raff')->values());
        }

        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }

    /**
     * @Route("/isa/{mot}/{nb}",name="is_action")
     */
    public function isaAction($mot,$nb)
    {
        $em = $this->container->get('neo4j.manager');
        $client = ClientBuilder::create()
            ->addConnection('default','http://neo4j:yodalapute123@localhost:7474')
            ->build();
        $query = sprintf('match (n:termes)<-[r]-(isa:termes) WHERE n.name = "%s" and type(r) = "6" return isa order by r.weight desc limit %d',$mot,$nb);
        $result = $client->run($query);
        $arr = array();
        foreach ($result->records() as $record) {
            array_push($arr,$record->nodeValue('isa')->values());
        }

        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type','application/json');
        return $response;
    }

}
