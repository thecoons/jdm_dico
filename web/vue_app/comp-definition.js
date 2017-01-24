Vue.component('comp-definition',{
  props: ['datarow'],
  template: '<div class="col s12 m6 offset-m3">\
<h5> Définitions </h5>\
<ul class="definitions">\
<li v-for="def in datarow">\
{{ def.definition }}\
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
