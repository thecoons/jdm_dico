Vue.component('comp-grammaire',{
    props: ['datarow'],
    template: '<small class="unbold">(<span v-for="(item, index) in datarow" v-if="item.weight > 0"> {{item.name | prettify}}</span> )</small>',


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
