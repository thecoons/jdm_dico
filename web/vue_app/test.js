Vue.component('test-item',{
  props: ['datarow'],
  template: '<div class="row">\
                <div class="col s12 m6 offset-m3">\
                  <h2> {{datarow}} </h2>\
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
    window.test = this
  }
})
