jdm_dico
========

A Symfony project created on December 23, 2016, 5:47 pm.

-----
# Configuration Neo4j

1. Download and uncompress `neo4j` at this [link](https://neo4j.com/download/).
2. Go to the  `neo4j-community-X.X.X/` directory.
1. Unzip the file `jdm_dbb.tar`
2. Put all files `*.csv` on the directory `import/` of the `neo4j` dir
2. Put the directory `reseauxJDM.db` at `data/databases/`
3. And all files `*.cql` at the `neo4j` root
7. Now we have to configure `Neo4j`, at `conf/neo4j.conf`.
8. Set `dbms.active_database` to `dbms.active_database=reseauxJDM.db`
9. And you have to uncomment `dbms.shell.enabled=true`,`dbms.shell.host=127.0.0.1`,`dbms.shell.port=1337`
10. You can upgrade the Neo4j working cache with `dbms.memory.heap.initial_size=3000m`,`dbms.memory.heap.max_size=3000m`
11. Now we can start `Neo4j` with `.\bin\neo4j start`
14. Try it, go at [Neo4j Web Manager](http://localhost:7474/browser/), at first you have to change your password
15. Then try this request, `match(n:termes)-[r]->(def:definitions) where type(r) = "A_Def" return n,def,r limit 10`

#Configuration de Symfony

1. When you have clone the repository, you have to install all dependencies, `composer install`
 1. Be sure to have `php-curl` on your system (avoid installation errors)
2. Then you have to add at the end of your `app/config/parameters.yml` 4 parameters in order to connect to your *Neo4j* database :

```yaml
neo4j_user: neo4j
neo4j_pass: yourpass
neo4j_host: localhost
neo4j_port: 7474
```

3. and now you can start the symfony server `./bin/consoler server:start`
4. If you get a 401 exception based on an authentication error when loading homepage, try to disable authentication by uncommenting the line `dbms.security.auth_enabled=false` of the `neo4j.conf` file