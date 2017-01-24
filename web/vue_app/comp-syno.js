Vue.component('comp-syno',{
  props: ['datarow'],
  template: '<div class="col s12 m6 offset-m3">\
<h5> Synonymes </h5>\
<ul class="definitions">\
<li v-for="def in datarow">\
<span v-if="def.nf">{{def.nf}}</span>\
<span v-else>{{def.name}}</span>\
</li>\
</ul>\
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
