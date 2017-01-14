Vue.component('comp-grammaire',{
    props: ['datarow'],
    template: '<div class="col s12 m8 offset-m2">\
<span v-for="(item, index) in datarow" v-if="item.weight > 0">{{item.name | prettify}} </span>\
</div>',


    data: function(){
	return {
            message: ""
	}
    },
    computed: {

    },
    watch: {

    },
    methods:{

    },
    mounted: function(){
    }
})
