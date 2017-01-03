Vue.component('comp-grammaire',{
  props: ['datarow'],
  template: '<div class="row">\
                <div class="col s4">\
                  <h5> Grammaire </h5>\
                  <p> {{datarow}} </p>\
                  <a class="waves-effect waves-light btn" @click="refresh">button</a>\
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
    refresh: function(){
      this.$emit('pull')
    }

  },
  mounted: function(){
  }
})
