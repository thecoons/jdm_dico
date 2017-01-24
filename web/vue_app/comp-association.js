Vue.component('comp-association',{
    props: ['datarow'],
    template: '<div class="col s12 m6 offset-m3">\
<h5> Associations </h5>\
<ul class="definitions">\
<li v-for="def in sortedArray">\
<span v-if="def.nf">{{def.nf}}  ({{def.weight}})</span>\
<span v-else>{{def.name}}  ({{def.weight}})</span>\
</li>\
</ul>\
</div>',

    data: function(){
	return {
            message: ""
	}
    },
    computed: {
	sortedArray: function () {
	    return this.datarow.sort(function(a,b){return b.weight -a.weight })
	}
    },
    watch: {

    },
    methods:{


    },
    mounted: function(){
    }
})
