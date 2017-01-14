
setTimeout(function(){
    Vue.filter('prettify', function (value) {
	return value.split(/[+:]/).join(' ')
    }),
    app = new Vue({
	
	el: '#app',
	
	delimiters: ['${','}'],

	data: {
	    search: '',
	    word: '',
	    grammaire: '',
	    definition:'',
	    association:'',
	    domain:'',
	    raffsem:'',
	    isaction:'',
	    carac:'',
	    contraire:'',
	    syno:'',
	    haspart:'',
	    specif:'',
	    test: '',
	    timer:''
	},
	computed: {

	},

	watch: {
	    search: function(val, oldVal){
		clearTimeout(this.timer)
		that = this
		this.timer = setTimeout(function(){
		    var resource = that.$resource('/search/{word}')
		    resource.get({word:val}).then((data) => {
			obj = data.body
			arr = {}
			for(var k in obj){
			    arr[obj[k].name] = null
			}
			that.test = arr
			$('input.autocomplete').autocomplete({
			    data: arr
			})
		    },(data) =>{

		    });
		},2000)
	    }
	},
	methods: {
	    refreshAll: function(){
		if(this.search){
		    this.grammaire = "",
		    this.definition = "",
		    this.association = "",
		    this.domain = "",
		    this.raffsem = "",
		    this.isaction = "",
		    this.carac = "",
		    this.contraire = "",
		    this.syno = "",
		    this.haspart = "",
		    this.specif = "",
		    this.test = "",
		    this.valideSearch(),
		    this.getTestApi(),
		    this.getGrammaireApi(),
		    this.getDefinitionApi(),
		    this.getAssociationApi(5),
		    this.getDomainApi(5),
		    this.getRaffSemApi(5),
		    this.getIsActionApi(5),
		    this.getCaracApi(5),
		    this.getContraireApi(5),
		    this.getSynoApi(5),
		    this.getHaspartApi(5),
		    this.getSpecifApi(5)
		}
	    },
	    //Methode interne de gestion de variable
	    valideSearch: function(){
		this.word = this.search
	    },
	    // Methode de test de l'api
	    getTestApi: function(){
		var resource = this.$resource('/test/{word}')
		resource.get({word:this.word}).then((data) => {
		    this.test = data.body
		},(data) =>{
		    this.getTestApi()
		});
	    },
	    // Methode de grammaire
	    getGrammaireApi: function(){
		var resource = this.$resource('/grammaire/{word}')
		resource.get({word:this.word}).then((data) => {
		    this.grammaire = data.body
		},(data) => {
		    this.getGrammaireApi()
		});
	    },
	    // Methode de definition
	    getDefinitionApi: function(){
		var resource = this.$resource("/definition/{word}")
		resource.get({word:this.word}).then((data) => {
		    this.definition =  data.body
		},(data) =>{
		    this.getDefinitionApi()
		});
	    },
	    // Methode des associations
	    getAssociationApi: function(nb){
		var resource = this.$resource("/associ/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.association =  data.body
		},(data) =>{
		    this.getAssociationApi(nb)
		});
	    },
	    // Methode des domaines
	    getDomainApi: function(nb){
		var resource = this.$resource("/domain/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.domain =  data.body
		},(data) =>{
		    this.getDomainApi(nb)
		});
	    },
	    // Methode des raffSem
	    getRaffSemApi: function(nb){
		var resource = this.$resource("/raff_sem/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.raffsem =  data.body
		},(data) =>{
		    this.getRaffSemApi(nb)
		});
	    },
	    // Methode isAction
	    getIsActionApi: function(nb){
		var resource = this.$resource("/isa/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.isaction =  data.body
		},(data) =>{
		    this.getIsActionApi(nb)
		});
	    },
	    // Methode carac
	    getCaracApi: function(nb){
		var resource = this.$resource("/carac/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.carac =  data.body
		},(data) =>{
		    this.getCaracApi(nb)
		});
	    },
	    // Methode contraire
	    getContraireApi: function(nb){
		var resource = this.$resource("/contraire/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.contraire =  data.body
		},(data) =>{
		    this.getContraireApi(nb)
		});
	    },
	    // Methode syno
	    getSynoApi: function(nb){
		var resource = this.$resource("/syno/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.syno =  data.body
		},(data) =>{
		    this.getSynoApi(nb)
		});
	    },
	    // Methode has_part
	    getHaspartApi: function(nb){
		var resource = this.$resource("/has_part/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.haspart =  data.body
		},(data) =>{
		    this.getHaspartApi(nb)
		});
	    },
	    // Methode specif
	    getSpecifApi: function(nb){
		var resource = this.$resource("/specif/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.specif =  data.body
		},(data) =>{
		    this.getSpecifApi(nb)
		});
	    },
	},
	mounted: function() {
	    window.app = this
	    $("#logo-container").sideNav();
	}
    })
},10)
