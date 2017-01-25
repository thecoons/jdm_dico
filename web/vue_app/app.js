
setTimeout(function(){
    Vue.filter('prettify', function (value) {
	return value.split(/[+:]/).map(function(x){return x.toLowerCase()}).join(' ')
    }),
    Vue.filter('noHtml', function (value) {
	return value.replace(/<(?:.|\n)*?>/gm, '');
    }),
    app = new Vue({

	el: '#app',

	delimiters: ['${','}'],

	data: {
	    counter: 0,
	    search: '',
	    word: '',
	    grammaire: '',
	    definition:'',
	    association:'',
	    domain:'',
	    raffsem:'',
	    action:'',
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
		    this.counter=0,
		    this.grammaire = "",
		    this.definition = "",
		    this.association = "",
		    this.domain = "",
		    this.raffsem = "",
		    this.action = "",
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
		    this.getActionApi(5),
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
		this.counter = this.counter+1;
		var resource = this.$resource('/test/{word}')
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.test = data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getTestApi()
		});
	    },
	    // Methode de grammaire
	    getGrammaireApi: function(){
		this.counter = this.counter+1;
		var resource = this.$resource('/grammaire/{word}')
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.grammaire = data.body
		},(data) => {
        this.counter=this.counter-1;
        this.getGrammaireApi()
		});
	    },
	    // Methode de definition
	    getDefinitionApi: function(){
		this.counter = this.counter+1;
		var resource = this.$resource("/definition/{word}")
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.definition =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getDefinitionApi()
		});
	    },
	    // Methode des associations
	    getAssociationApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/associ/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.association =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getAssociationApi(nb)
		});
	    },
	    // Methode des domaines
	    getDomainApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/domain/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.domain =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getDomainApi(nb)
		});
	    },
	    // Methode des raffSem
	    getRaffSemApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/raff_sem/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.raffsem =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getRaffSemApi(nb)
		});
	    },
	    // Methode Action
	    getActionApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/isa/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.action =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getActionApi(nb)
		});
	    },
	    // Methode carac
	    getCaracApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/carac/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.carac =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getCaracApi(nb)
		});
	    },
	    // Methode contraire
	    getContraireApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/contraire/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.contraire =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getContraireApi(nb)
		});
	    },
	    // Methode syno
	    getSynoApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/syno/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.syno =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getSynoApi(nb)
		});
	    },
	    // Methode has_part
	    getHaspartApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/has_part/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.haspart =  data.body
		},(data) =>{
        this.counter=this.counter-1;
		    this.getHaspartApi(nb)
		});
	    },
	    // Methode specif
	    getSpecifApi: function(nb){
		this.counter = this.counter+1;
		var resource = this.$resource("/specif/{word}/"+nb)
		resource.get({word:this.word}).then((data) => {
		    this.counter=this.counter-1;
		    this.specif =  data.body
		},(data) =>{
        this.counter=this.counter-1;
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
