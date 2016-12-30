Vue.component('comp',{
    props: ['datarow'],
  template: '<div class="row">\
                <div class="col s12 m6 offset-m3">\
                  <h5>test</h5>\
                  <p> {{datarow}} </p>\
                </div>\
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
