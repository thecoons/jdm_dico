Vue.component('comp-definition',{
  props: ['datarow'],
  template: '<div class="row">\
                <div class="col s4">\
                  <h5> Definition </h5>\
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
