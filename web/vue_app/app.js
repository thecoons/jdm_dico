
setTimeout(function(){
  app = new Vue({
    el: '#app',

    delimiters: ['${','}'],

    data: {
      word: '',
      grammaire: '',
      definition:'',
      association:'',
      domain:'',
      raffsem:'',
      isaction:'',
      test: ''
    },
    computed: {

    },
    methods: {
      refreshAll: function(){
        this.getTestApi(),
        this.getGrammaireApi(),
        this.getDefinitionApi(),
        this.getAssociationApi(5),
        this.getDomainApi(5),
        this.getRaffSemApi(5),
        this.getIsActionApi(5)
      },
      // Methode de test de l'api
      getTestApi: function(){
        var resource = this.$resource('/test/{word}')
        resource.get({word:this.word}).then((data) => {
          this.test = data.body
        },(data) =>{
          this.test = "Error loading data"
        });
      },
      // Methode de grammaire
      getGrammaireApi: function(){
        var resource = this.$resource('/grammaire/{word}')
        resource.get({word:this.word}).then((data) => {
          this.grammaire = data.body
        },(data) => {
          this.grammaire = "Error loading data"
        });
      },
      // Methode de definition
      getDefinitionApi: function(){
        var resource = this.$resource("/definition/{word}")
        resource.get({word:this.word}).then((data) => {
          this.definition =  data.body
        },(data) =>{
          this.definition = "Error loading data"
        });
      },
      // Methode des associations
      getAssociationApi: function(nb){
        var resource = this.$resource("/associ/{word}/"+nb)
        resource.get({word:this.word}).then((data) => {
          this.association =  data.body
        },(data) =>{
          this.association = "Error loading data"
        });
      },
      // Methode des domaines
      getDomainApi: function(nb){
        var resource = this.$resource("/domain/{word}/"+nb)
        resource.get({word:this.word}).then((data) => {
          this.domain =  data.body
        },(data) =>{
          this.domain = "Error loading data"
        });
      },
      // Methode des raffSem
      getRaffSemApi: function(nb){
        var resource = this.$resource("/raff_sem/{word}/"+nb,[],[],{timeout:0})
        resource.get({word:this.word}).then((data) => {
          this.raffsem =  data.body
        },(data) =>{
          this.raffsem = "Error loading data"
        });
      },
      // Methode isAction
      getIsActionApi: function(nb){
        var resource = this.$resource("/isa/{word}/"+nb)
        resource.get({word:this.word}).then((data) => {
          this.isaction =  data.body
        },(data) =>{
          this.isaction = "Error loading data"
        });
      },
    },
    mounted: function() {
      window.app = this
      $("#logo-container").sideNav();
    }
  })
},10)
