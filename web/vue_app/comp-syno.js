Vue.component('comp-syno',{
  props: ['datarow'],
  template: '<div class="row">\
                <div class="col s4">\
                  <h5> Synonime </h5>\
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
