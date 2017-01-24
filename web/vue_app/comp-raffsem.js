Vue.component('comp-raffsem',{
  props: ['datarow'],
  template: '<div class="col s12 m6 offset-m3">\
<h5> Raffinements </h5>\
<ul class="definitions">\
<li v-for="def in datarow">\
{{ def.nf }}\
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
